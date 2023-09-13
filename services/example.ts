export interface IExampleService {
  foo(req: Request, res: Response): void;
  bar(req: Request, res: Response): void;
}

export class ExampleService {

  foo(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  bar(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}

export const ExampleServiceInstance = new ExampleService();