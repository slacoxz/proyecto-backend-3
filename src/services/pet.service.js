// user.service.js
import userModel from "../models/User.model.js";

export default class UserService {
  async insertMany(users) {
    return await userModel.insertMany(users);
  }
}
