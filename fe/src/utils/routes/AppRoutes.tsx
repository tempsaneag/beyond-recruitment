import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';

import WhoWeAre from '@/pages/WhoWeAre';
import Excellence from '@/pages/Excellence';
import Services from '@/pages/Services';
import WhyUs from '@/pages/WhyUs';
import Contact from '@/pages/Contact';
import Team from '@/pages/Team';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/who-we-are' element={<WhoWeAre />} />
        <Route path='/excellence' element={<Excellence />} />
        <Route path='/services' element={<Services />} />
        <Route path='/why-us' element={<WhyUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/team' element={<Team />} />
      </Route>
    </Routes>
  );
}
