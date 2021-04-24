import {
  IPaymentProvider,
  IPaymentProviderCreateReturn,
} from "providers/IPaymentProvider";
import { CreatePaymentDTO } from "./CreatePaymentDTO";

export type CreatePaymentUseCaseExecuteReturn = IPaymentProviderCreateReturn;

export class CreatePaymentUseCase {
  constructor(private paymentProvider: IPaymentProvider) {}

  async execute(
    createPaymentDTO: CreatePaymentDTO
  ): Promise<CreatePaymentUseCaseExecuteReturn> {
    const { amount } = createPaymentDTO;

    const paymentIntent = await this.paymentProvider.createIntent(amount);

    return paymentIntent;
  }
}
