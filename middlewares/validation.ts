import mongoose from 'mongoose';

/**
 * it validates the existance of the ID property
 */

export default (req: any, res: any, next: any) => {
  "id" in req.params && !mongoose.isValidObjectId(req.params.id) ? res.status(200).json(null) : next()
};