import { Model } from "mongoose";

export class BaseModel {
  public model: Model<any>
  protected returnNew = { useFindAndModify: false, new: true };

  constructor(model: Model<any>) {
    this.model = model
  }

  all<T>(): Promise<T[]> {
    return this.model.find({ deleted: false }).exec();
  }

  find<T>(id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

  findOne<T>(query: any): Promise<T> {
    return this.model.findOne(query).exec();
  }

  findMany<T>(query: any): Promise<any[] | T> {
    return this.model.find(query).exec();
  }

  create<T>(document: any): Promise<T> {
    return this.model.create(document);
  }

  update<T>(id: string, document: any): Promise<T> {
    return this.model
      .findByIdAndUpdate(id, document, this.returnNew)
      .exec();
  }

  delete(id: string): Promise<boolean> {
    return this.model.findByIdAndDelete(id).exec();
  }

  soft(id: string): Promise<boolean> {
    return this.model.findByIdAndUpdate(id, { deleted: true }, this.returnNew).exec();
  }

  restore(id: string): Promise<boolean> {
    return this.model.findByIdAndUpdate(id, { deleted: false }, this.returnNew).exec();
  }

  exists(id: string, query: any): Promise<any> {
    return this.model.findOne({ _id: { $ne: id }, ...query, deleted: false }).exec();
  }
}