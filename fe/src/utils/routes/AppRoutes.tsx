import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';

import WhoWeAre from '@/pages/WhoWeAre';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import { AnimatePresence } from 'framer-motion';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/who-we-are' element={<WhoWeAre />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
