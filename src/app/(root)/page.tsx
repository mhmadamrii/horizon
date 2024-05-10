import { getLoggedInUser } from '~/actions/user.action';
import { HeaderBox } from '~/components/HeaderBox';
import { RecentTransactions } from '~/components/RecentTransactions';
import { RightSidebar } from '~/components/RightSidebar';
import { TotalBalanceBox } from '~/components/TotalBalanceBox';

export default async function Home() {
  const loggedIn = await getLoggedInUser();
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

  // @ts-ignore
  const account = [];

  const appwriteItemId = '20';
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
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            // @ts-ignore
            accounts={accountsData}
            // @ts-ignore
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={
              // @ts-ignore
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
