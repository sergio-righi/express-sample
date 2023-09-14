import express, { Request, Response } from "express";
import { ExampleControllerInstance } from 'controllers'

export class ExampleRouter {
  router: express.Router;

  constructor() {
    this.router = express.Router()

    this.#setRoute();
  }

  #setRoute() {
    this.router.get("/foo", (req: Request, res: Response) => ExampleControllerInstance.foo(req, res));
    this.router.post("/bar", (req: Request, res: Response) => ExampleControllerInstance.bar(req, res));
  }
}

export const ExampleRouterInstance = new ExampleRouter().router;