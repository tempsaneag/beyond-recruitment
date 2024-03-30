export default function YourRights() {
  return (
    <div className='space-y-5'>
      <p className='text-4xl font-semibold'>Your Rights</p>
      <ul className='list-outside list-disc pl-5 text-lg text-gray-700'>
        <li className='list-item'>
          Right of access: You have a right to access the personal data we
          process about you;
        </li>
        <li className='list-item'>
          Right to correct: You have the right to obtain rectification of any
          inaccurate and incomplete personal data about you;
        </li>
        <li className='list-item'>
          Right to erase (right to be forgotten): In exceptional cases, you have
          the right to obtain erasure of information about you before the time
          when we would normally delete your personal data;
        </li>
        <li className='list-item'>
          Right to restrict the processing: In certain situations, you have the
          right to restrict the processing of your personal data. If you
          exercise the right to restrict the processing of your personal data,
          we may only process your personal data in the future - apart from
          storage - with your consent, or for the establishment, exercise or
          defense of legal claims, or to protect individual or important public
          interests;
        </li>
        <li className='list-item'>
          Right to object: In certain situations, you have the right to object
          to our processing of your personal data.
        </li>
      </ul>
    </div>
  );
}
