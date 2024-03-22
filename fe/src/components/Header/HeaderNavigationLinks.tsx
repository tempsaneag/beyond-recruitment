import { Link } from 'react-router-dom';

export default function HeaderNavigationLinks() {
  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Who we are',
      path: '#about',
    },
    {
      title: 'Services',
      path: '#services',
    },
    {
      title: 'Contact',
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
