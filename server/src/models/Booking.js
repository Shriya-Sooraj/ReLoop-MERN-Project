import mongoose from 'mongoose';
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, required: true, trim: true },
  itemType: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  pincode: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  pickupDate: { type: Date, required: true },
  notes: { type: String, default: '' },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'], default: 'Pending' }
}, { timestamps: true });
export default mongoose.model('Booking', bookingSchema);
