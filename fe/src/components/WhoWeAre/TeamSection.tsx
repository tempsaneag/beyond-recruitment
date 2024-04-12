import TeamCard from '@/components/WhoWeAre/TeamCard';

export default function TeamSection() {
  return (
    <div className='container w-full space-y-10 py-10 lg:space-y-20'>
      <TeamCard
        image='/images/iulian.jpg'
        name='Iulian Bobeica, Co-Founder and Partner of Beyond Recruitment.'
        description='Iulian is the Co-Founder and Partner of Beyond Recruitment, currently based in Chisinau, Moldova. With extensive experience as a Tech and Recruitment Consultant, Iulian has worked across various industry segments, including Technology, Fintech, Industrial, and FMCG. His robust skill set encompasses Market Research, Recruiting, Management Consulting, Executive Search, Sourcing, Business Development, and more. He is known for his never-give-up attitude and relentless focus on successful delivery, enabling him to tackle complex recruitment projects with confidence and success. Fluent in English, Romanian and Russian languages, facilitating effective communication and collaboration across diverse teams and regions.'
        imageSide='right'
        linkedinUrl='https://linkedin.com/in/iulian-bobeica-196409a7'
        imageContainerClassName='w-3/12'
      />
      <TeamCard
        image='/images/liviu.jpg'
        name='Liviu Tcaci, Co-Founder and Partner of Beyond Recruitment.'
        description="Liviu is the Co-Founder and Partner of Beyond Recruitment, currently based in Chisinau, Moldova. He is a certified IT Talent Acquisition specialist known for his hands-on approach to projects and mandates. With a superb skill set in candidate and client management, Liviu excels in communication and possesses extensive knowledge of tech market trends across various regions. He is well-connected within the IT community, facilitating strong relationships and collaborations. Fluent in English, Romanian, and Russian, Liviu's multilingual abilities enhance his effectiveness in cross-cultural communication and networking."
        imageSide='left'
        linkedinUrl='https://linkedin.com/in/tcaci'
        imageContainerClassName='w-3/12'
      />
    </div>
  );
}
