import Image from 'next/image';

import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from 'react-plaid-link';

// import {
//   createLinkToken,
//   exchangePublicToken,
// } from '~/actions/user.action';

export const PlaidLink = ({
  user,
  variant,
}: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    // const getLinkToken = async () => {
    //   const data = await createLinkToken(user);
    //   setToken(data?.linkToken);
    // };
    // getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      // await exchangePublicToken({
      //   publicToken: public_token,
      //   user,
      // });
      // router.push('/');
    },
    [user],
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button
          onClick={() => open()}
          variant="ghost"
          className="plaidlink-ghost"
        >
          <Image
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className="hiddenl text-black-2 text-[16px] font-semibold xl:block">
            Connect bank
          </p>
        </Button>
      ) : (
        <Button
          onClick={() => open()}
          className="plaidlink-default"
        >
          <Image
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className="text-black-2 text-[16px] font-semibold">
            Connect bank
          </p>
        </Button>
      )}
    </>
  );
};
