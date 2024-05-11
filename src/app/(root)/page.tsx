import {
  getAccount,
  getAccounts,
} from '~/actions/bank.action';
import { getLoggedInUser } from '~/actions/user.action';
import { HeaderBox } from '~/components/HeaderBox';
import { RecentTransactions } from '~/components/RecentTransactions';
import { RightSidebar } from '~/components/RightSidebar';
import { TotalBalanceBox } from '~/components/TotalBalanceBox';

export default async function Home({
  id,
  page,
}: {
  id: string;
  page: string;
}) {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId =
    (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  const currentPage = 1;
  // const currentPage = Number(page as string) || 1;

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={
              accounts?.totalCurrentBalance || 4000
            }
          />
        </header>

        <RecentTransactions
          // @ts-ignore
          accounts={accountsData}
          // @ts-ignore
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      <RightSidebar
        user={loggedIn}
        // @ts-ignore
        transactions={account?.transactions}
        // @ts-ignore
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
}
