import AboutUs from '@/components/PrivacyPolicy/AboutUs';
import DataCollection from '@/components/PrivacyPolicy/DataCollection';
import DataHandling from '@/components/PrivacyPolicy/DataHandling';
import DataSharing from '@/components/PrivacyPolicy/DataSharing';
import DataUsage from '@/components/PrivacyPolicy/DataUsage';
import PersonalDataFromTests from '@/components/PrivacyPolicy/PersonalDataFromTests';
import YourRights from '@/components/PrivacyPolicy/YourRights';

export default function PrivacyPolicy() {
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
        <div className='text-lg text-gray-700'>
          <p>
            For any inquiries or requests regarding your personal data, please
            contact us at beyond-recruitment.net.
          </p>
          <p>
            This Privacy Notice is effective as of… and may be updated
            periodically.
          </p>
        </div>
      </div>
    </div>
  );
}
