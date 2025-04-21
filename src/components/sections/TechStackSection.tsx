import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../animations/variants";
import { FiInfo } from "react-icons/fi";

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Technology categories
  const techCategories = [
    {
      id: "frontend",
      name: "Frontend",
      technologies: [
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          description: "Our primary frontend framework for building interactive UIs"
        },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          description: "Used for complex enterprise applications"
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
          description: "For server-rendered React applications"
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          description: "Static typing for JavaScript to improve code quality and maintainability"
        },
        {
          name: "Tailwind CSS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          description: "For rapid UI development with utility-first approach"
        }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      technologies: [
        {
          name: "Ruby on Rails",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
          description: "Rapid backend development with convention over configuration"
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          description: "JavaScript runtime for scalable backend applications"
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          description: "Fast, unopinionated, minimalist web framework for Node.js"
        },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          description: "API query language for more efficient data fetching"
        }
      ]
    },
    {
      id: "mobile",
      name: "Mobile",
      technologies: [
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          description: "Cross-platform mobile app development with React"
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
          description: "UI toolkit for building natively compiled applications"
        },
        {
          name: "Swift",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
          description: "For native iOS application development"
        },
        {
          name: "Kotlin",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
          description: "For native Android application development"
        }
      ]
    },
    {
      id: "devops",
      name: "DevOps & Database",
      technologies: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          description: "Containerization for consistent environments"
        },
        {
          name: "Kubernetes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          description: "Container orchestration for scaling applications"
        },
        {
          name: "AWS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
          description: "Cloud infrastructure for hosting and scaling applications"
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          description: "Robust relational database for data storage"
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          description: "NoSQL database for flexible data models"
        }
      ]
    }
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState(techCategories[0].id);

  return (
    <section id="tech-stack" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-hashtech-blue font-semibold mb-2 block">OUR EXPERTISE</span>
          <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
          <p className="text-gray-600">
            We leverage modern technologies to deliver cutting-edge solutions for our clients.
            Our team has expertise in a wide range of tools and frameworks to tackle diverse challenges.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-hashtech-blue text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Tech Display */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12"
        >
          {techCategories.map((category) => (
            <div
              key={category.id}
              className={activeCategory === category.id ? "block" : "hidden"}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {category.technologies.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-start gap-4">
            <FiInfo className="text-hashtech-blue text-xl mt-1 shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-2">Technology Selection Process</h4>
              <p className="text-gray-600">
                At HashTech, we carefully select technologies based on project requirements,
                scalability needs, and long-term maintenance considerations. Our team stays up-to-date
                with the latest advancements to ensure we're using the most efficient tools for your project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Tech Card Component
const TechCard = ({ tech, index }: { tech: any; index: number }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.div
        className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center h-full"
        whileHover={{ y: -5 }}
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-16 h-16 mb-4 object-contain"
        />
        <h4 className="font-semibold text-center">{tech.name}</h4>
      </motion.div>

      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-3 bg-gray-800 text-white text-xs rounded shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <div className="relative">
            <p>{tech.description}</p>
            <div className="absolute w-3 h-3 bg-gray-800 transform rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TechStackSection;
