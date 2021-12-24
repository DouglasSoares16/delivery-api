/* eslint-disable */

import { AppError } from "../../../shared/errors/AppError";

export namespace AuthenticateUserError {
  export class EmailOrPasswordIncorrect extends AppError {
    constructor() {
      super("Username or Password Incorrect!");
    }
  }
}
