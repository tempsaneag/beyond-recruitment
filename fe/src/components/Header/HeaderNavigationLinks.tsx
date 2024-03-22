import { useTranslation } from 'react-i18next';

import header from '@/locales/en/header.json';
import { Link } from 'react-router-dom';

export default function HeaderNavigationLinks() {
  const { t } = useTranslation();

  const links = [
    {
      title: t(header.Home),
      path: '/',
    },
    {
      title: t(header['Who we are']),
      path: '#about',
    },
    {
      title: t(header.Services),
      path: '#services',
    },
    {
      title: t(header.Contact),
      path: '#contact',
    },
  ];

  return (
    <div className='flex gap-3'>
      {links.map((link) => (
        <Link
          to={link.path}
          key={link.title}
          className='flex text-2xl font-semibold 
          transition-colors duration-300 hover:text-blue-600'
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
