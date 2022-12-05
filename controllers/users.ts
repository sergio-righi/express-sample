import { UserModel } from "@/models";
import { BaseController } from "./base.controller";

class UsersController extends BaseController {
  constructor() {
    super(UserModel);
  }
}

export default new UsersController();