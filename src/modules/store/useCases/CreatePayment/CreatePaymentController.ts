import { Request, Response } from "express";
import { CreatePaymentUseCase } from "./CreatePaymentUseCase";

export class CreatePaymentController {
  constructor(private createPaymentUseCase: CreatePaymentUseCase) {}

  async handle(req: Request, res: Response) {
    const { amount } = req.body;

    try {
      const paymentIntent = await this.createPaymentUseCase.execute({ amount });

      return res.json(paymentIntent);
    } catch (err) {
      console.error(err);

      return res.status(500).end();
    }
  }
}
