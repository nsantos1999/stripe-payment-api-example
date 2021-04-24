import { createPaymentController } from "@modules/store/useCases/CreatePayment";
import { Router } from "express";

const app = Router();

app.post("/", (req, res) => createPaymentController.handle(req, res));

export default app;
