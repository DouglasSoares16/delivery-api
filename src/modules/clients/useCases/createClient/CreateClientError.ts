/* eslint-disable */
import { AppError } from "../../../../shared/errors/AppError";

export namespace CreateClientError {
  export class ClientAlreadyExists extends AppError {
    constructor() {
      super("Client Already Exists!");
    }
  }
}
