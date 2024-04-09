import WhyWorkingWithUsListItems from '@/components/Services/WhyWorkingWithUsListItems';

export default function WhyWorkingWithUsSection() {
  return (
    <div>
      <div className='container space-y-5 py-5 md:py-10'>
        <p className='text-4xl font-semibold'>Why Working With Us</p>
        <div className='flex gap-5'>
          <div className='flex flex-1 flex-col gap-4'>
            <WhyWorkingWithUsListItems
              title='Industry Insights: '
              description='With our specialized focus on tech recruitment and executive research, Beyond Recruitment Partners offers in-depth industry knowledge and insights. Our extensive network includes thousands of Software Engineers and Management Candidates, ensuring we connect you with the best talent available.'
              delay={0.5}
            />
            <WhyWorkingWithUsListItems
              title='Proven Track Record: '
              description='Our team has successfully filled roles across various industries and countries. Clients can trust in our ability to deliver quality candidates and achieve their recruitment objectives effectively.'
              delay={1}
            />
            <WhyWorkingWithUsListItems
              title='Personalized Service: '
              description="We believe in providing personalized support tailored to the unique needs of each client. From the initial consultation to the final placement, we are adaptable and embracing agility, including the integration of agile ceremonies as appropriate. Our team is dedicated to understanding your organization's goals, culture, and requirements, ensuring a customized recruitment experience that meets your expectations."
              delay={1.5}
            />
            <WhyWorkingWithUsListItems
              title='Geography Knowledge: '
              description='Beyond Recruitment Partners possesses strong knowledge and expertise in the geographical areas we serve, including the EMEA region, the Nordics, and specific regions in Eastern Europe.'
              delay={2}
            />
            <WhyWorkingWithUsListItems
              title='Cost-effectiveness: '
              description="This is a core principle that guides our approach at Beyond Recruitment Partners. We're committed to delivering high-quality services at competitive prices, ensuring that our clients receive maximum value for their investment."
              delay={2.5}
            />
            <WhyWorkingWithUsListItems
              title='Guarantee: '
              description='We offer from 3 to 6 months guarantee, subject to the geography location and candidate seniority level.'
              delay={3}
            />
          </div>
          <div className='h-auto max-w-sm max-lg:hidden'>
            <img src='/images/photo_2024-03-25_21-30-32.jpg' />
          </div>
        </div>
      </div>
    </div>
  );
}
