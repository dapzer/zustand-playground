import React, { FC } from 'react';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const login = useAuthStore((state) => state.login)

  React.useEffect(() => {
    login("qqqwe")
  }, [])

  return (
    <div className={'layout container'}>
      <header>
        <Link href={'/'}>
          <h2>
            Main
          </h2>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
