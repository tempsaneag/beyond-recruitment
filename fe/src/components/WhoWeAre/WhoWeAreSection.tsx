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
                At Beyond Recruitment Partners, we specialize in tech
                recruitment and executive search, with a strong aptitude for
                connecting with IT professionals, software engineers, and
                management-level candidates. Our primary focus lies in tech
                talent recruitment and executive research across the USA, EMEA,
                and select regions in Eastern Europe. We excel at assisting our
                clients in identifying and acquiring the right talent for their
                organizations, guiding them through every stage of the
                recruitment process to enhance their delivery and achieve their
                business objectives.
              </p>
              <p>
                Our team is composed of experienced Recruitment Consultants who
                bring a strong track record from the dynamic IT industry and
                Executive Search. With expertise spanning multiple sectors such
                as Technology, Industrial, Financial Services, and Consumer
                Goods, we have a proven history of executing successful
                placements from entry to executive levels.
              </p>
              <p>
                The mission of our firm revolves around delivering exceptional
                recruitment research and continuous support to meet our clients’
                diverse needs. We are dedicated to cultivating lasting
                relationships anchored in trust, excellence, and accountability.
                Our solutions are designed to be cost-effective yet
                uncompromising in quality, ensuring we not only meet but exceed
                your expectations and redefining the landscape of talent
                acquisition in the dynamic global marketplace.
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
