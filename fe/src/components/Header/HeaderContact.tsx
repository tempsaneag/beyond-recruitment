import { Mail, Phone } from 'lucide-react';

export default function HeaderContact() {
  return (
    <div className='container flex justify-end gap-5 pt-2'>
      <a
        href='mailto:example@example.com'
        className='group flex items-center gap-2'
      >
        <Mail className='size-5 transition-colors duration-300 group-hover:text-red-500' />
        <span>example@example.com</span>
      </a>
      <a href='tel:+1234567890' className='group flex items-center gap-2'>
        <Phone className='size-5 transition-colors duration-300 group-hover:text-blue-500' />
        <span>+1234567890</span>
      </a>
    </div>
  );
}
