import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInLeft, fadeInRight, pathDraw, staggerContainer } from "../../animations/variants";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timelineEvents = [
    {
      year: "2024",
      title: "HashTech Founded",
      description: "Shivang Sharma establishes HashTech with a vision to deliver cutting-edge software solutions.",
    },
    {
      year: "2024",
      title: "First Major Project",
      description: "Successfully delivered our first enterprise-level web application for a financial services client.",
    },
    {
      year: "2024",
      title: "Team Expansion",
      description: "Grew our team with talented developers and designers to meet increasing client demand.",
    },
    {
      year: "2024",
      title: "Mobile Development Division",
      description: "Expanded our services to include mobile app development with React Native and Flutter.",
    },
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.span
              variants={fadeInLeft}
              className="text-hashtech-blue font-semibold inline-block"
            >
              OUR STORY
            </motion.span>

            <motion.h2
              variants={fadeInLeft}
              className="text-4xl font-bold mb-6"
            >
              Pioneering Tech Solutions Since 2024
            </motion.h2>

            <motion.p
              variants={fadeInLeft}
              className="text-gray-600 mb-6"
            >
              HashTech was founded by Shivang Sharma, who brings over 8 years of hands-on experience
              in data engineering, automation, and software development to the company. With a deep
              understanding of modern technologies and business processes, Shivang established HashTech
              with a vision to help businesses leverage the power of cutting-edge technology.
            </motion.p>

            <motion.p
              variants={fadeInLeft}
              className="text-gray-600 mb-6"
            >
              Based in Delhi, India, our team of talented engineers, designers, and consultants works
              collaboratively to deliver solutions that drive business growth and innovation. We're
              passionate about technology and committed to helping our clients succeed in the digital landscape.
            </motion.p>

            <motion.div
              variants={fadeInLeft}
              className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/images/logo.png"
                  alt="Shivang Sharma"
                  className="w-14 h-14 rounded-full bg-gray-200 object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">Shivang Sharma</h4>
                  <p className="text-gray-600 text-sm">Founder & CEO</p>
                </div>
              </div>

              <div className="sm:border-l sm:border-gray-300 sm:pl-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <p className="text-gray-700 text-sm">8+ Years Experience</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="text-gray-700 text-sm">50+ Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.h3
              variants={fadeInRight}
              className="text-2xl font-bold mb-8"
            >
              Our Journey
            </motion.h3>

            <div className="relative pl-8 border-l-2 border-hashtech-blue/20">
              {timelineEvents.map((event, index) => (
                <TimelineItem key={index} event={event} index={index} />
              ))}
            </div>

            {/* Stats */}
            <motion.div
              variants={fadeInRight}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="hashtech-gradient-bg p-6 rounded-lg text-white">
                <h4 className="text-4xl font-bold">10+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="hashtech-gradient-bg p-6 rounded-lg text-white">
                <h4 className="text-4xl font-bold">7</h4>
                <p>Satisfied Clients</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-white">
                <h4 className="text-4xl font-bold">6</h4>
                <p>Team Members</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              title="Innovation"
              description="We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
              colorClass="text-purple-600"
              delay={0.1}
            />
            <ValueCard
              title="Excellence"
              description="We're committed to delivering high-quality work that exceeds client expectations."
              colorClass="text-hashtech-blue"
              delay={0.2}
            />
            <ValueCard
              title="Collaboration"
              description="We work closely with our clients, ensuring their vision is realized through open communication."
              colorClass="text-hashtech-orange"
              delay={0.3}
            />
            <ValueCard
              title="Integrity"
              description="We operate with honesty, transparency, and ethical practices in all our business dealings."
              colorClass="text-green-600"
              delay={0.4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Timeline Item Component
const TimelineItem = ({ event, index }: { event: any; index: number }) => {
  return (
    <motion.div
      className="mb-10 relative"
      initial={{ opacity: 0, x: 50 }}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.2,
          },
        },
      }}
    >
      <div className="absolute -left-[41px] w-6 h-6 bg-white rounded-full border-2 border-hashtech-blue flex items-center justify-center">
        <div className="w-2 h-2 bg-hashtech-blue rounded-full"></div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <span className="text-hashtech-blue font-semibold">{event.year}</span>
        <h4 className="text-lg font-bold mt-1">{event.title}</h4>
        <p className="text-gray-600 text-sm mt-2">{event.description}</p>
      </div>
    </motion.div>
  );
};

// Value Card Component
const ValueCard = ({ title, description, colorClass, delay }: { title: string; description: string; colorClass: string; delay: number }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <h4 className={`text-xl font-bold mb-3 ${colorClass}`}>{title}</h4>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default AboutSection;
