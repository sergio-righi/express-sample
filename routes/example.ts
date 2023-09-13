import express, { Request, Response } from "express";
import { ExampleControllerInstance } from "controllers";

export const ExampleRouter = express.Router();

ExampleRouter.get("/foo", (req: Request, res: Response) => ExampleControllerInstance.foo(req, res));
ExampleRouter.post("/bar", (req: Request, res: Response) => ExampleControllerInstance.bar(req, res));
