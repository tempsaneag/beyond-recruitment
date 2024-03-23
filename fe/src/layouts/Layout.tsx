import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '@/components/Header/Header';

export default function Layout() {
  return (
    <div>
      <Header />
      <div className='overflow-x-hidden'>
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </div>
    </div>
  );
}
