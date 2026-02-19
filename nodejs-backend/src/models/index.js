const { sequelize } = require('../config/database');

// Import all models
const User = require('./User');
const Admin = require('./Admin');
const Category = require('./Category');
const SubCategory = require('./SubCategory');
const Brand = require('./Brand');
const Car = require('./Car');
const Variant = require('./Variant');
const Service = require('./Service');
const ServiceCar = require('./ServiceCar');
const ServiceInclude = require('./ServiceInclude');
const ServiceExclude = require('./ServiceExclude');
const ServiceAddon = require('./ServiceAddon');
const Order = require('./Order');
const OrderItem = require('./OrderItem');
const OrderLocation = require('./OrderLocation');
const UserCartItem = require('./UserCartItem');
const TrafficChallan = require('./TrafficChallan');
const Review = require('./Review');
const Wallet = require('./Wallet');
const WalletTransaction = require('./WalletTransaction');
const Ticket = require('./Ticket');
const TicketMessage = require('./TicketMessage');
const Coupon = require('./Coupon');
const Offer = require('./Offer');
const OfferService = require('./OfferService');
const UserSelectedCar = require('./UserSelectedCar');
const Notification = require('./Notification');
const RefundedOrder = require('./RefundedOrder');
const FavoriteItem = require('./FavoriteItem');
const UserLocation = require('./UserLocation');
const State = require('./State');
const City = require('./City');
const Area = require('./Area');
const MediaUpload = require('./MediaUpload');
const Department = require('./Department');
const ChatMessage = require('./ChatMessage');
const EngineType = require('./EngineType');
const FuelType = require('./FuelType');
const Slider = require('./Slider');
const AdminOutletLocation = require('./AdminOutletLocation');
const AdminNotification = require('./AdminNotification');
const Role = require('./Role');
const Permission = require('./Permission');

// ==================== Define Associations ====================

// Category associations
Category.hasMany(SubCategory, { foreignKey: 'category_id', as: 'subCategories' });
SubCategory.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });

Category.hasMany(Service, { foreignKey: 'category_id', as: 'services' });
Service.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });

SubCategory.hasMany(Service, { foreignKey: 'sub_category_id', as: 'services' });
Service.belongsTo(SubCategory, { foreignKey: 'sub_category_id', as: 'subCategory' });

// Brand & Car associations
Brand.hasMany(Car, { foreignKey: 'brand_id', as: 'cars' });
Car.belongsTo(Brand, { foreignKey: 'brand_id', as: 'brand' });

// Variant associations
Car.hasMany(Variant, { foreignKey: 'car_id', as: 'variants' });
Variant.belongsTo(Car, { foreignKey: 'car_id', as: 'car' });

EngineType.hasMany(Variant, { foreignKey: 'engine_type_id', as: 'variants' });
Variant.belongsTo(EngineType, { foreignKey: 'engine_type_id', as: 'engineType' });

FuelType.hasMany(Variant, { foreignKey: 'fual_type_id', as: 'variants' });
Variant.belongsTo(FuelType, { foreignKey: 'fual_type_id', as: 'fuelType' });

// Service associations
Admin.hasMany(Service, { foreignKey: 'admin_id', as: 'services' });
Service.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' });

Service.hasMany(ServiceInclude, { foreignKey: 'service_id', as: 'includes' });
ServiceInclude.belongsTo(Service, { foreignKey: 'service_id', as: 'service' });

Service.hasMany(ServiceExclude, { foreignKey: 'service_id', as: 'excludes' });
ServiceExclude.belongsTo(Service, { foreignKey: 'service_id', as: 'service' });

Service.hasMany(ServiceAddon, { foreignKey: 'service_id', as: 'addons' });
ServiceAddon.belongsTo(Service, { foreignKey: 'service_id', as: 'service' });

Service.hasMany(ServiceCar, { foreignKey: 'service_id', as: 'serviceCars' });
ServiceCar.belongsTo(Service, { foreignKey: 'service_id', as: 'service' });

Service.hasMany(Review, { foreignKey: 'service_id', as: 'reviews' });
Review.belongsTo(Service, { foreignKey: 'service_id', as: 'service' });

Service.hasMany(OrderItem, { foreignKey: 'service_id', as: 'orderItems' });
OrderItem.belongsTo(Service, { foreignKey: 'service_id', as: 'service' });

Service.hasMany(UserCartItem, { foreignKey: 'item_id', as: 'cartItems' });
UserCartItem.belongsTo(Service, { foreignKey: 'item_id', as: 'service' });

// Offer associations
Service.hasMany(OfferService, { foreignKey: 'service_id', as: 'offerServices' });
OfferService.belongsTo(Service, { foreignKey: 'service_id', as: 'service' });

Offer.hasMany(OfferService, { foreignKey: 'offer_id', as: 'offerServices' });
OfferService.belongsTo(Offer, { foreignKey: 'offer_id', as: 'offer' });

// User associations
User.hasMany(Order, { foreignKey: 'user_id', as: 'orders' });
Order.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasMany(Review, { foreignKey: 'reviewer_id', as: 'reviews' });
Review.belongsTo(User, { foreignKey: 'reviewer_id', as: 'reviewer' });

User.hasMany(UserCartItem, { foreignKey: 'user_id', as: 'cartItems' });
UserCartItem.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasMany(TrafficChallan, { foreignKey: 'user_id', as: 'challans' });
TrafficChallan.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasOne(Wallet, { foreignKey: 'user_id', as: 'wallet' });
Wallet.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasMany(UserSelectedCar, { foreignKey: 'user_id', as: 'selectedCars' });
UserSelectedCar.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
UserSelectedCar.belongsTo(Brand, { foreignKey: 'brand_id', as: 'brand' });
UserSelectedCar.belongsTo(Car, { foreignKey: 'car_id', as: 'car' });

User.hasMany(UserLocation, { foreignKey: 'user_id', as: 'locations' });
UserLocation.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasMany(FavoriteItem, { foreignKey: 'user_id', as: 'favorites' });
FavoriteItem.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasMany(RefundedOrder, { foreignKey: 'user_id', as: 'refundedOrders' });
RefundedOrder.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasMany(Ticket, { foreignKey: 'user_id', as: 'tickets' });
Ticket.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// Location associations
State.hasMany(City, { foreignKey: 'state_id', as: 'cities' });
City.belongsTo(State, { foreignKey: 'state_id', as: 'state' });

City.hasMany(Area, { foreignKey: 'city_id', as: 'areas' });
Area.belongsTo(City, { foreignKey: 'city_id', as: 'city' });

// Order associations
Admin.hasMany(Order, { foreignKey: 'admin_id', as: 'orders' });
Order.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' });

Admin.hasMany(Order, { foreignKey: 'franchise_admin_id', as: 'franchiseOrders' });
Order.belongsTo(Admin, { foreignKey: 'franchise_admin_id', as: 'franchiseAdmin' });

Order.hasMany(OrderItem, { foreignKey: 'order_id', as: 'items' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id', as: 'order' });

Order.hasOne(OrderLocation, { foreignKey: 'order_id', as: 'location' });
OrderLocation.belongsTo(Order, { foreignKey: 'order_id', as: 'order' });

Order.hasMany(Review, { foreignKey: 'order_id', as: 'reviews' });
Review.belongsTo(Order, { foreignKey: 'order_id', as: 'order' });

Order.hasOne(RefundedOrder, { foreignKey: 'order_id', as: 'refund' });
RefundedOrder.belongsTo(Order, { foreignKey: 'order_id', as: 'order' });

// Wallet associations
Wallet.hasMany(WalletTransaction, { foreignKey: 'wallet_id', as: 'transactions' });
WalletTransaction.belongsTo(Wallet, { foreignKey: 'wallet_id', as: 'wallet' });

User.hasMany(WalletTransaction, { foreignKey: 'user_id', as: 'walletTransactions' });
WalletTransaction.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// Ticket associations
Admin.hasMany(Ticket, { foreignKey: 'admin_id', as: 'tickets' });
Ticket.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' });

Department.hasMany(Ticket, { foreignKey: 'department_id', as: 'tickets' });
Ticket.belongsTo(Department, { foreignKey: 'department_id', as: 'department' });

Order.hasMany(Ticket, { foreignKey: 'order_id', as: 'tickets' });
Ticket.belongsTo(Order, { foreignKey: 'order_id', as: 'order' });

Ticket.hasMany(ChatMessage, { foreignKey: 'ticket_id', as: 'messages' });
ChatMessage.belongsTo(Ticket, { foreignKey: 'ticket_id', as: 'ticket' });

Ticket.hasMany(TicketMessage, { foreignKey: 'ticket_id', as: 'ticketMessages' });
TicketMessage.belongsTo(Ticket, { foreignKey: 'ticket_id', as: 'ticket' });

User.hasMany(TicketMessage, { foreignKey: 'user_id', as: 'ticketMessages' });
TicketMessage.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Admin.hasMany(TicketMessage, { foreignKey: 'admin_id', as: 'ticketMessages' });
TicketMessage.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' });

// Review - Admin association
Admin.hasMany(Review, { foreignKey: 'admin_id', as: 'reviews' });
Review.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' });

// Outlet location associations
Admin.hasMany(AdminOutletLocation, { foreignKey: 'admin_id', as: 'outletLocations' });
AdminOutletLocation.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' });

// Export all models
module.exports = {
  sequelize,
  User,
  Admin,
  Category,
  SubCategory,
  Brand,
  Car,
  Variant,
  Service,
  ServiceCar,
  ServiceInclude,
  ServiceExclude,
  ServiceAddon,
  Order,
  OrderItem,
  OrderLocation,
  UserCartItem,
  TrafficChallan,
  Review,
  Wallet,
  WalletTransaction,
  Ticket,
  TicketMessage,
  Coupon,
  Offer,
  OfferService,
  UserSelectedCar,
  Notification,
  RefundedOrder,
  FavoriteItem,
  UserLocation,
  State,
  City,
  Area,
  MediaUpload,
  Department,
  ChatMessage,
  EngineType,
  FuelType,
  Slider,
  AdminOutletLocation,
  AdminNotification,
  Role,
  Permission
};
