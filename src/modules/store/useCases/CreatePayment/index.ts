import { StripeProvider } from "providers/implementations/StripeProvider";
import { CreatePaymentController } from "./CreatePaymentController";
import { CreatePaymentUseCase } from "./CreatePaymentUseCase";

const stripeProvider = StripeProvider.getInstance();

const createPaymentUseCase = new CreatePaymentUseCase(stripeProvider);

const createPaymentController = new CreatePaymentController(
  createPaymentUseCase
);

export { createPaymentController };
