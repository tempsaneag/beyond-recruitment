import { NavLink } from 'react-router-dom';

export default function HeaderNavigationLinks() {
  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Who we are',
      path: '/who-we-are',
    },
    {
      title: 'Excellence',
      path: '/excellence',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Why us',
      path: '/why-us',
    },
    {
      title: 'Team',
      path: '/team',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <div className='flex gap-3'>
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.title}
          className='flex text-xl font-semibold 
          transition-colors duration-300 hover:text-blue-600'
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}
