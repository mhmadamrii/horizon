import Image from 'next/image';

import { HeaderBox } from '~/components/HeaderBox';
import { RecentTransactions } from '~/components/RecentTransactions';
import { RightSidebar } from '~/components/RightSidebar';
import { TotalBalanceBox } from '~/components/TotalBalanceBox';

export default function Home() {
  const loggedIn = {};
  const accountsData = [
    {
      name: 'fucking shit',
      currentBalance: 3000,
    },
    {
      name: 'fucking lol',
      currentBalance: 30440,
    },
    {
      name: 'shitty lol',
      currentBalance: 30440,
    },
  ];

  const accounts = [
    {
      name: 'fucking shit',
      currentBalance: 3000,
    },
    {
      name: 'fucking lol',
      currentBalance: 30440,
    },
  ];

  const account = [];

  const appwriteItemId = 20;
  const currentPage = 1;
  // const currentPage = Number(page as string) || 1;
  // const loggedIn = await getLoggedInUser();
  // const accounts = await getAccounts({
  //   userId: loggedIn.$id
  // })

  // if(!accounts) return;

  // const accountsData = accounts?.data;
  // const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  // const account = await getAccount({ appwriteItemId })

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
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
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
}
