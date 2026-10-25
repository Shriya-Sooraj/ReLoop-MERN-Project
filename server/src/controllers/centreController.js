import Centre from '../models/Centre.js';
export async function getCentres(req, res, next) {
  try {
    const filter = { active: true };
    if (req.query.pincode) filter.pincode = { $regex: req.query.pincode, $options: 'i' };
    if (req.query.q) filter.$or = [{ name: { $regex: req.query.q, $options: 'i' } }, { address: { $regex: req.query.q, $options: 'i' } }];
    res.json(await Centre.find(filter).sort({ name: 1 }).limit(50));
  } catch (e) { next(e); }
}
export async function createCentre(req, res, next) {
  try {
    const { name, address, pincode } = req.body;
    if (!name || !address || !pincode) return res.status(400).json({ message: 'Name, address and PIN code are required.' });
    res.status(201).json(await Centre.create(req.body));
  } catch (e) { next(e); }
}
