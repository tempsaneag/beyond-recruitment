import { Mail, Phone } from 'lucide-react';

export default function HeaderContact() {
  return (
    <div className='container flex flex-wrap justify-end gap-x-5 gap-y-2 pt-2 text-sm'>
      <a
        href='https://www.linkedin.com/company/102391126/admin/feed/posts/?feedType=following'
        target='_blank'
        className='group flex items-center gap-2'
      >
        <img src='/images/linkedin.png' className='size-5' />
        <span>LinkedIn</span>
      </a>
      <a
        href='mailto:connect@beyond-recruitment.net'
        className='group flex items-center gap-2'
      >
        <Mail className='size-5 transition-colors duration-300 group-hover:text-red-500' />
        <span>connect@beyond-recruitment.net</span>
      </a>
      <a href='tel:+37368249608' className='group flex items-center gap-2'>
        <Phone className='size-5 transition-colors duration-300 group-hover:text-blue-500' />
        <span>+37368249608</span>
      </a>
    </div>
  );
}
