/* eslint-disable */

import { AppError } from "../../../../shared/errors/AppError";

export namespace CreateDeliverymanError {
  export class DeliverymanAlreadyExists extends AppError {
    constructor() {
      super("Deliveryman Already Exists!");
    }
  }
}