import mongoose, { Schema } from 'mongoose'
import { BaseModel } from "./base.model";

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      trim: true,
      type: String,
      lowercase: true
    },
    password: {
      type: String
    },
    email: {
      trim: true,
      type: String,
      lowercase: true
    },
    validated: {
      type: Boolean,
    },
    roles: {
      type: Array
    },
    deleted: {
      type: Boolean
    }
  },
  { collection: "users", timestamps: true }
);

class UserModel extends BaseModel {
  constructor() {
    super(
      mongoose.model('User', UserSchema)
    )
  }
}

export default new UserModel();