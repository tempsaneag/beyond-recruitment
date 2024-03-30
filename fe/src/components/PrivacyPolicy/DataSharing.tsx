export default function DataSharing() {
  return (
    <div className='space-y-5'>
      <p className='text-4xl font-semibold'>Data Sharing</p>
      <div className='space-y-3'>
        <p className='text-lg text-gray-700'>
          Candidate data may be shared with:
        </p>
        <ul className='list-outside list-disc pl-5 text-lg text-gray-700'>
          <li className='list-item'>Clients upon candidate consent;</li>
          <li className='list-item'>
            Clients in anonymized form for statistical or market intelligence
            purposes;
          </li>
          <li className='list-item'>
            Client data may be shared with candidates as required for the
            recruitment process.
          </li>
        </ul>
      </div>
    </div>
  );
}
