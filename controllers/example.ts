import { Request, Response } from 'express'
import { BaseController } from './base.controller';
import { ExampleServiceInstance, IExampleService } from "services";
import { ExampleModelInstance } from "models";

export class ExampleController extends BaseController {
  constructor() {
    super(ExampleModelInstance);
  }

  foo(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  bar(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}

export const ExampleControllerInstance = new ExampleController();