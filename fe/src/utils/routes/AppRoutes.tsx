import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import WhoWeAre from '@/pages/WhoWeAre';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import { AnimatePresence } from 'framer-motion';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

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
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
