import { Router } from "express";

import userRoutes from "@routes/payment.routes";

const app = Router();

app.use("/payment", userRoutes);

export default app;
