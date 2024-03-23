import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header';

export default function Layout() {
  return (
    <div className='flex h-full min-h-screen flex-col'>
      <Header />
      <div className='flex flex-1 flex-col overflow-x-hidden'>
        <Outlet />
      </div>
    </div>
  );
}
