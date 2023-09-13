import mongoose, { Schema } from "mongoose";
import { BaseModel } from "./base.model";

export interface IExample {
  foo: string;
  bar: string;
}

export const ExampleSchema = new Schema<IExample>({
  foo: { type: String, required: true },
  bar: { type: String, required: true },
}, { collection: "examples", timestamps: true });

export class ExampleModel extends BaseModel {
  constructor() {
    super(mongoose.model<IExample>("Example", ExampleSchema));
  }
}

export const ExampleModelInstance = new ExampleModel();