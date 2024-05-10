import Image from 'next/image';
import React from 'react';

import { logoutAccount } from '~/actions/user.action';
import { useRouter } from 'next/navigation';

export const Footer = ({
  user,
  type = 'desktop',
}: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push('/sign-in');
  };

  return (
    <footer className="footer">
      <div
        className={
          type === 'mobile'
            ? 'footer_name-mobile'
            : 'footer_name'
        }
      >
        <p className="text-xl font-bold text-gray-700">
          {user?.name[0]}
        </p>
      </div>

      <div
        className={
          type === 'mobile'
            ? 'footer_email-mobile'
            : 'footer_email'
        }
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
};
