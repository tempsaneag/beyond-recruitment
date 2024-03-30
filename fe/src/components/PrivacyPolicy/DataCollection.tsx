export default function DataCollection() {
  return (
    <div className='space-y-5'>
      <p className='text-4xl font-semibold'>Data Collection</p>
      <div className='space-y-3'>
        <p className='text-lg text-gray-700'>
          We collect personal data from both Candidates and Clients. For
          Candidates, this may include:
        </p>
        <ul className='list-outside list-disc pl-5 text-lg text-gray-700'>
          <li className='list-item'>
            Personal contact information (name, email, phone);
          </li>
          <li className='list-item'>
            URLs of professional social media profiles (e.g., LinkedIn);
          </li>
          <li className='list-item'>
            Details of professional background and employment history;
          </li>
          <li className='list-item'>
            Information shared during communication (email, LinkedIn);
          </li>
          <li className='list-item'>Other details provided in CVs.</li>
        </ul>
        <p className='text-lg text-gray-700'>
          <span className='text-red-500'>*</span> For Clients, we collect
          similar information pertinent to our services.
        </p>
      </div>
    </div>
  );
}
