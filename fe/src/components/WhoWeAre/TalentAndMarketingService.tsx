import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function TalentAndMarketingService() {
  return (
    <Card className='w-full bg-gray-100 sm:w-10/12 lg:w-5/12'>
      <CardHeader>
        <p className='text-2xl font-semibold'>Talent and Market Mapping</p>
        <p>
          Our talent and market mapping services meticulously chart the
          landscape of skilled professionals and market trends, empowering
          businesses with targeted insights to strategically navigate
          recruitment and market positioning
        </p>
      </CardHeader>
      <CardContent>
        <p className='text-2xl font-semibold'>How it works</p>
        <ul className='mt-2 list-outside list-disc space-y-2 pl-5'>
          <li>
            In-depth analysis of the talent landscape within specific industries
            or sectors.
          </li>
          <li>
            Identification and profiling of key players, competitors, and
            emerging talent pools.
          </li>
          <li>
            Strategic insights to help clients understand market trends, talent
            availability, and potential recruitment challenges.
          </li>
          <li>
            Customized reports and recommendations to inform talent acquisition
            strategies and decision-making processes.
          </li>
          <li>
            In-depth mapping of talent within targeted industries or functional
            areas.
          </li>
          <li>
            Collaboration with clients to develop long-term talent acquisition
            strategies and succession planning initiatives.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
