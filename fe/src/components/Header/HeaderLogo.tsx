import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function HeaderLogo() {
  return (
    <div>
      <Avatar className='h-20 w-20'>
        <AvatarFallback className='bg-gray-300'>Logo</AvatarFallback>
      </Avatar>
    </div>
  );
}
