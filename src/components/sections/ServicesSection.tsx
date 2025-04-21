import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiServer,
  FiBarChart2,
  FiLayout
} from "react-icons/fi";
import {
  staggerContainer,
  fadeInUp,
  cardHover
} from "../../animations/variants";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      id: 1,
      title: "Web-based Solutions",
      icon: <FiCode className="w-6 h-6" />,
      description: "Custom web applications built using modern frameworks like React.js and Ruby on Rails, tailored to your specific business requirements.",
      technologies: ["React.js", "Ruby on Rails", "Node.js", "GraphQL", "REST APIs"],
      color: "bg-hashtech-blue",
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: <FiSmartphone className="w-6 h-6" />,
      description: "Intuitive and responsive mobile applications for iOS and Android platforms using React Native and Flutter.",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      color: "bg-hashtech-orange",
    },
    {
      id: 3,
      title: "DevOps & Database Management",
      icon: <FiServer className="w-6 h-6" />,
      description: "Comprehensive database solutions and DevOps services to ensure your applications run smoothly and efficiently.",
      technologies: ["AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"],
      color: "bg-hashtech-mediumBlue",
    },
    {
      id: 4,
      title: "Data Analysis & Automation",
      icon: <FiBarChart2 className="w-6 h-6" />,
      description: "Transform your raw data into actionable insights with our data analysis services and automated workflows.",
      technologies: ["Python", "R", "Jupyter", "TensorFlow", "Pandas"],
      color: "bg-hashtech-lightBlue",
    },
    {
      id: 5,
      title: "UI/UX Design",
      icon: <FiLayout className="w-6 h-6" />,
      description: "User-centric design services that focus on creating intuitive, engaging, and visually appealing interfaces for your applications.",
      technologies: ["Figma", "Adobe XD", "Sketch", "User Testing", "Prototyping"],
      color: "bg-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-hashtech-blue font-semibold mb-2 block">OUR EXPERTISE</span>
          <h2 className="text-4xl font-bold mb-6">Comprehensive IT Services</h2>
          <p className="text-gray-600">
            At HashTech, we offer a wide range of services to meet all your IT needs.
            Our team of experts is ready to transform your ideas into successful digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="button-primary inline-block">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: any }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover="hover"
      initial="rest"
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="p-8">
        <motion.div
          className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center text-white mb-6`}
          variants={cardHover}
        >
          {service.icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <motion.a
          href="#contact"
          className="text-hashtech-blue font-medium inline-flex items-center gap-1"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Learn More
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
