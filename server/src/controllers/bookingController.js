import Booking from '../models/Booking.js';
export async function getBookings(req, res, next) {
  try { res.json(await Booking.find().sort({ createdAt: -1 }).limit(100)); } catch (e) { next(e); }
}
export async function createBooking(req, res, next) {
  try {
    const required = ['name','email','phone','itemType','quantity','pincode','address','pickupDate'];
    const missing = required.filter(k => req.body[k] === undefined || req.body[k] === '');
    if (missing.length) return res.status(400).json({ message: `Please fill in: ${missing.join(', ')}` });
    if (!/^\S+@\S+\.\S+$/.test(req.body.email)) return res.status(400).json({ message: 'Enter a valid email address.' });
    if (Number(req.body.quantity) < 1) return res.status(400).json({ message: 'Quantity must be at least 1.' });
    const booking = await Booking.create({ ...req.body, quantity: Number(req.body.quantity) });
    res.status(201).json(booking);
  } catch (e) { next(e); }
}
export async function updateBooking(req, res, next) {
  try {
    const allowed = ['Pending','Confirmed','Completed','Cancelled'];
    if (!allowed.includes(req.body.status)) return res.status(400).json({ message: 'Invalid booking status.' });
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true, runValidators: true });
    if (!booking) return res.status(404).json({ message: 'Booking not found.' });
    res.json(booking);
  } catch (e) { next(e); }
}
