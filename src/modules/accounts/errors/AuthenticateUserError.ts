/* eslint-disable */

import { AppError } from "../../../shared/errors/AppError";

export namespace AuthenticateUserError {
  export class UsernameOrPasswordIncorrect extends AppError {
    constructor() {
      super("Username or Password Incorrect!");
    }
  }
}
