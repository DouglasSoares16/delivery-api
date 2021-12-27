import { Router } from "express";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/accounts/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/findAllDeliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();

routes.post("/clients", createClientController.handle);
routes.post("/clients/authenticate", authenticateClientController.handle);
routes.get(
  "/clients/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

routes.post("/deliverymans", createDeliverymanController.handle);
routes.post(
  "/deliverymans/authenticate",
  authenticateDeliverymanController.handle
);
routes.get(
  "/deliverymans/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

routes.post(
  "/deliveries",
  ensureAuthenticateClient,
  createDeliveryController.handle
);
routes.get(
  "/deliveries/available",
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);
routes.put(
  "/deliveries/update/:delivery_id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

export { routes };
