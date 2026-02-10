<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TrafficChallan extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'vehicle_number',
        'challan_number',
        'offence_type',
        'offence_description',
        'fine_amount',
        'paid_amount',
        'offence_location',
        'offence_date',
        'due_date',
        'status',
        'payment_status',
        'payment_method',
        'payment_reference',
        'payment_gateway_response',
        'paid_at',
        'remarks',
        'issuing_authority',
        'api_reference_id',
    ];

    protected $casts = [
        'fine_amount' => 'decimal:2',
        'paid_amount' => 'decimal:2',
        'offence_date' => 'datetime',
        'due_date' => 'datetime',
        'paid_at' => 'datetime',
    ];

    /**
     * Get the user that owns the challan
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Scope to get pending challans
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    /**
     * Scope to get paid challans
     */
    public function scopePaid($query)
    {
        return $query->where('status', 'paid');
    }

    /**
     * Scope to get challans for a specific vehicle
     */
    public function scopeForVehicle($query, $vehicleNumber)
    {
        return $query->where('vehicle_number', $vehicleNumber);
    }

    /**
     * Check if challan is overdue
     */
    public function isOverdue()
    {
        return $this->due_date && $this->due_date < now() && $this->status === 'pending';
    }

    /**
     * Get remaining amount to be paid
     */
    public function getRemainingAmountAttribute()
    {
        return $this->fine_amount - $this->paid_amount;
    }

    /**
     * Mark challan as paid
     */
    public function markAsPaid($paymentMethod, $paymentReference, $amount = null)
    {
        $this->update([
            'status' => 'paid',
            'payment_status' => 'paid',
            'paid_amount' => $amount ?? $this->fine_amount,
            'payment_method' => $paymentMethod,
            'payment_reference' => $paymentReference,
            'paid_at' => now(),
        ]);
    }
}
