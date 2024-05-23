import PaymentTransferForm from '~/components/PaymentTransactionForm';

import { getAccounts } from '~/actions/bank.action';
import { getLoggedInUser } from '~/actions/user.action';
import { HeaderBox } from '~/components/HeaderBox';

export default async function PaymentTransfer() {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
}
