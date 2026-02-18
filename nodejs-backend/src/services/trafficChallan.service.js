const axios = require('axios');
const crypto = require('crypto');
const paymentConfig = require('../config/payment');
const { TrafficChallan } = require('../models');

class TrafficChallanService {
  constructor() {
    this.config = paymentConfig.instantpay;
    this.baseUrl = this.config.baseUrl;
  }

  /**
   * Get request headers
   */
  getHeaders() {
    return {
      'X-Ipay-Client-Id': this.config.clientId,
      'X-Ipay-Client-Secret': this.config.clientSecret,
      'X-Ipay-Auth-Code': this.config.authCode,
      'Content-Type': 'application/json'
    };
  }

  /**
   * Encrypt data
   */
  encryptData(data) {
    if (!this.config.encryptionKey) {
      return data;
    }

    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      Buffer.from(this.config.encryptionKey, 'hex'),
      Buffer.alloc(16, 0)
    );

    let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
  }

  /**
   * Fetch challans by vehicle number
   */
  async fetchChallansByVehicle(vehicleNumber, userId) {
    // Use mock data if configured
    if (this.config.useMock) {
      return this.getMockChallans(vehicleNumber, userId);
    }

    try {
      const response = await axios.post(
        `${this.baseUrl}/traffic/challan/fetch`,
        { vehicleNumber },
        { headers: this.getHeaders() }
      );

      if (response.data.success) {
        // Save challans to database
        const challans = await this.saveChallans(response.data.data, userId, vehicleNumber);
        return { success: true, data: challans };
      }

      return response.data;
    } catch (error) {
      console.error('Fetch challans error:', error);
      throw new Error(`Failed to fetch challans: ${error.message}`);
    }
  }

  /**
   * Get challan details
   */
  async getChallanDetails(challanId, userId) {
    const challan = await TrafficChallan.findOne({
      where: { id: challanId, user_id: userId }
    });

    if (!challan) {
      throw new Error('Challan not found');
    }

    return challan;
  }

  /**
   * Pay challan
   */
  async payChallan(challanId, userId, paymentMethod) {
    const challan = await TrafficChallan.findOne({
      where: { id: challanId, user_id: userId }
    });

    if (!challan) {
      throw new Error('Challan not found');
    }

    if (challan.payment_status === 'paid') {
      throw new Error('Challan already paid');
    }

    // Use mock response if configured
    if (this.config.useMock) {
      return this.processMockPayment(challan, paymentMethod);
    }

    try {
      const response = await axios.post(
        `${this.baseUrl}/traffic/challan/pay`,
        {
          challanNumber: challan.challan_number,
          amount: challan.fine_amount,
          paymentMethod
        },
        { headers: this.getHeaders() }
      );

      if (response.data.success) {
        // Update challan status
        await challan.update({
          status: 'paid',
          payment_status: 'paid',
          payment_method: paymentMethod,
          payment_reference: response.data.data.transactionId,
          payment_gateway_response: JSON.stringify(response.data),
          paid_amount: challan.fine_amount,
          paid_at: new Date()
        });

        return { success: true, data: challan, transaction: response.data.data };
      }

      return response.data;
    } catch (error) {
      console.error('Pay challan error:', error);
      throw new Error(`Failed to process payment: ${error.message}`);
    }
  }

  /**
   * Get user's challan history
   */
  async getChallanHistory(userId, page = 1, limit = 10) {
    const offset = (page - 1) * limit;

    const { count, rows: challans } = await TrafficChallan.findAndCountAll({
      where: { user_id: userId },
      order: [['created_at', 'DESC']],
      limit,
      offset
    });

    return {
      challans,
      pagination: {
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit)
      }
    };
  }

  /**
   * Get challan statistics for user
   */
  async getChallanStats(userId) {
    const challans = await TrafficChallan.findAll({
      where: { user_id: userId }
    });

    const stats = {
      total: challans.length,
      pending: 0,
      paid: 0,
      totalFineAmount: 0,
      totalPaidAmount: 0,
      pendingAmount: 0
    };

    challans.forEach(challan => {
      stats.totalFineAmount += parseFloat(challan.fine_amount) || 0;

      if (challan.payment_status === 'paid') {
        stats.paid++;
        stats.totalPaidAmount += parseFloat(challan.paid_amount) || 0;
      } else {
        stats.pending++;
        stats.pendingAmount += parseFloat(challan.fine_amount) || 0;
      }
    });

    return stats;
  }

  /**
   * Save challans to database
   */
  async saveChallans(challansData, userId, vehicleNumber) {
    const savedChallans = [];

    for (const data of challansData) {
      // Check if challan already exists
      let challan = await TrafficChallan.findOne({
        where: { challan_number: data.challanNumber }
      });

      if (challan) {
        // Update existing challan
        await challan.update({
          fine_amount: data.fineAmount,
          offence_type: data.offenceType,
          offence_description: data.offenceDescription,
          offence_location: data.offenceLocation,
          offence_date: data.offenceDate,
          due_date: data.dueDate,
          status: data.status || 'pending'
        });
      } else {
        // Create new challan
        challan = await TrafficChallan.create({
          user_id: userId,
          vehicle_number: vehicleNumber,
          challan_number: data.challanNumber,
          offence_type: data.offenceType,
          offence_description: data.offenceDescription,
          fine_amount: data.fineAmount,
          offence_location: data.offenceLocation,
          offence_date: data.offenceDate,
          due_date: data.dueDate,
          status: 'pending',
          payment_status: 'unpaid',
          api_reference_id: data.referenceId,
          issuing_authority: data.issuingAuthority
        });
      }

      savedChallans.push(challan);
    }

    return savedChallans;
  }

  /**
   * Get mock challans (for testing)
   */
  async getMockChallans(vehicleNumber, userId) {
    const mockData = [
      {
        challanNumber: `CH${Date.now()}1`,
        vehicleNumber,
        offenceType: 'Over Speeding',
        offenceDescription: 'Vehicle exceeded speed limit by 20 km/h',
        fineAmount: 500,
        offenceLocation: 'Delhi - Ring Road',
        offenceDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'pending'
      },
      {
        challanNumber: `CH${Date.now()}2`,
        vehicleNumber,
        offenceType: 'Signal Jump',
        offenceDescription: 'Jumped red light at traffic signal',
        fineAmount: 1000,
        offenceLocation: 'Delhi - Connaught Place',
        offenceDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        dueDate: new Date(Date.now() + 23 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'pending'
      }
    ];

    const challans = await this.saveChallans(mockData, userId, vehicleNumber);
    return { success: true, data: challans };
  }

  /**
   * Process mock payment
   */
  async processMockPayment(challan, paymentMethod) {
    const transactionId = `TXN${Date.now()}`;

    await challan.update({
      status: 'paid',
      payment_status: 'paid',
      payment_method: paymentMethod,
      payment_reference: transactionId,
      paid_amount: challan.fine_amount,
      paid_at: new Date()
    });

    return {
      success: true,
      data: challan,
      transaction: {
        transactionId,
        amount: challan.fine_amount,
        status: 'success'
      }
    };
  }
}

module.exports = new TrafficChallanService();
