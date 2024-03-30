export default function DataUsage() {
  return (
    <div className='space-y-5'>
      <p className='text-4xl font-semibold'>Data Usage</p>
      <div className='space-y-3'>
        <p className='text-lg text-gray-700'>
          We use Candidate data for various purposes, including:
        </p>
        <ul className='list-outside list-disc pl-5 text-lg text-gray-700'>
          <li className='list-item'>
            Assessing suitability for specific positions;
          </li>
          <li className='list-item'>Introducing candidates to clients;</li>
          <li className='list-item'>Contacting for references or feedback;</li>
          <li className='list-item'>Complying with legal obligations.</li>
        </ul>
      </div>
      <div className='space-y-3'>
        <p className='text-lg text-gray-700'>
          Client data is utilized for purposes such as:
        </p>
        <ul className='list-outside list-disc pl-5 text-lg text-gray-700'>
          <li className='list-item'>
            Contacting for specific research mandates;
          </li>
          <li className='list-item'>
            Seeking feedback on projects or discussing business opportunities;
          </li>
          <li className='list-item'>Handling invoicing or legal matters.</li>
        </ul>
      </div>
    </div>
  );
}
