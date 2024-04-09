import { motion } from 'framer-motion';

export default function WhoWeAreSection() {
  return (
    <div className='flex size-full py-10'>
      <div className='container'>
        <p className='text-4xl font-semibold'>Who We Are</p>
        <div className='space-y-10'>
          <motion.div
            className='mt-5 flex flex-col items-center justify-between gap-10 xl:flex-row xl:items-start'
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className='flex-1 space-y-3 text-justify md:text-lg'>
              <p>
                At Beyond Recruitment Partners, we are a specialized tech
                recruitment and executive research firm, well-connected in the
                market with IT talent, software engineers, and management
                candidates. Our primary focus lies in tech talent recruitment
                and executive research, with a specific focus on the EMEA
                region, including the Nordics and select regions in Eastern
                Europe. We excel in assisting our clients in identifying and
                acquiring the right talent for their organizations, guiding them
                through every stage of the recruitment process to strengthen
                their delivery and achieve their business objectives.
              </p>
              <p>
                Our team consists of experienced Recruitment Consultants and
                Researchers with a strong track record in the dynamic IT
                industry and Executive Search. With expertise across various
                industries, including Technology, Industrial, Financial Services
                and Consumer Goods, we have successfully conducted searches at
                all levels in both developed and emerging markets.
              </p>
              <p>
                Our mission is simple: to meet our clients' needs by delivering
                quality recruitment research and ongoing support. We prioritize
                building long-term relationships based on accountability and a
                commitment to excellence. We bring to the table cost-effective
                solutions that provide exceptional value without sacrificing
                quality. At Beyond Recruitment Partners, we're dedicated to
                going beyond your expectations, driving success for our clients,
                and shaping the future of talent acquisition in today's
                ever-changing global market.
              </p>
            </div>
            <div className='flex h-fit w-full max-w-xl'>
              <img
                src='/images/photo_2024-04-06_21-19-41.jpg'
                className='size-full'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
