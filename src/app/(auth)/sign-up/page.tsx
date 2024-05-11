import { getLoggedInUser } from '~/actions/user.action';
import { AuthForm } from '~/components/AuthForm';

export default async function SignUp() {
  const user = await getLoggedInUser();
  console.log('users', user);
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
}

// plaid recovery: LQZMPB-JEJJSLQ-EJDADJJ-MK3XSQ
