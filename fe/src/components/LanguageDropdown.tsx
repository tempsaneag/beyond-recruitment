import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguageStore } from '@/store/languageStore';
import { useTranslation } from 'react-i18next';
import UnitedKingdomIcon from '@/assets/icons/united-kingdom.png';
import RomaniaIcon from '@/assets/icons/romania.png';

interface LanguageDropdownProps {
  code: string;
  name: string;
  icon: string;
}

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useLanguageStore((state) => state);

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  const languages: LanguageDropdownProps[] = [
    {
      code: 'en',
      name: 'English',
      icon: UnitedKingdomIcon,
    },
    {
      code: 'ro',
      name: 'Română',
      icon: RomaniaIcon,
    },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            src={currentLanguage?.icon}
            alt={currentLanguage?.name + ' icon'}
            className='h-7 w-7 cursor-pointer'
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <div className='flex items-center gap-2'>
                <span>
                  <img
                    src={lang.icon}
                    alt={lang.name + ' icon'}
                    className='h-7 w-7'
                  />
                </span>
                <span>{lang.name}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
