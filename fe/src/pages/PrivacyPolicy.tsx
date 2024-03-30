import AboutUs from '@/components/PrivacyPolicy/AboutUs';
import Changes from '@/components/PrivacyPolicy/Changes';
import DataCollection from '@/components/PrivacyPolicy/DataCollection';
import DataHandling from '@/components/PrivacyPolicy/DataHandling';
import DataSharing from '@/components/PrivacyPolicy/DataSharing';
import DataUsage from '@/components/PrivacyPolicy/DataUsage';
import PersonalDataFromTests from '@/components/PrivacyPolicy/PersonalDataFromTests';
import YourRights from '@/components/PrivacyPolicy/YourRights';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container py-5 sm:py-10'>
      <div className='w-full space-y-10 md:w-10/12'>
        <p className='text-4xl font-semibold'>Privacy Policy</p>
        <div className='space-y-5'>
          <p className='text-lg text-gray-700'>
            At Beyond Recruitment, safeguarding your privacy and protecting your
            personal data is of paramount importance to us. This Privacy Notice
            outlines how we collect and utilize your personal information in
            compliance with the General Data Protection Regulation (GDPR).
          </p>
        </div>
        <AboutUs />
        <DataCollection />
        <PersonalDataFromTests />
        <DataUsage />
        <DataHandling />
        <DataSharing />
        <YourRights />
        <Changes />
      </div>
    </div>
  );
}
