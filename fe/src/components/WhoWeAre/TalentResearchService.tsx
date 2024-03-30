import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function TalentResearchService() {
  return (
    <Card className='w-full bg-gray-100 sm:w-10/12 lg:w-5/12'>
      <CardHeader>
        <p className='text-2xl font-semibold'>Talent Research</p>
        <p>
          With our talent research capabilities, we reveal the stars waiting to
          be found, delivering individualized solutions to connect business with
          the ideal candidates suited to their distinct needs and objectives.
        </p>
      </CardHeader>
      <CardContent>
        <p className='text-2xl font-semibold'>How it works</p>
        <ul className='list mt-2 list-inside list-disc space-y-2'>
          <li>
            Comprehensive research to identify and assess potential candidates
            for specific roles or projects.
          </li>
          <li>
            Utilization of advanced search techniques and tools to uncover
            hidden talent and passive candidates.
          </li>
          <li>
            Detailed candidate profiling, including skills, experience,
            qualifications, and cultural fit, identification of potential
            candidates for current and future hiring needs.
          </li>
          <li>
            Delivery of curated shortlists of qualified candidates, providing
            clients with valuable insights to support their recruitment efforts.
          </li>
          <li>
            We will provide detailed assessment notes about the qualified
            candidates and take over the interview arrangements for you.
          </li>
          <li>
            Continuous support with the candidate management until an offer is
            extended and accepted.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
