import mongoose from 'mongoose';
const centreSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  pincode: { type: String, required: true, trim: true },
  acceptedItems: [{ type: String }],
  phone: { type: String, default: '' },
  mapUrl: { type: String, default: '' },
  active: { type: Boolean, default: true }
}, { timestamps: true });
export default mongoose.model('Centre', centreSchema);
