export type Currencies = "usd" | "brl";

export type IPaymentProviderCreateReturn = {
  clientSecret: string;
};

export interface IPaymentProvider {
  createIntent(
    amount: number,
    currency?: Currencies
  ): Promise<IPaymentProviderCreateReturn>;
}
