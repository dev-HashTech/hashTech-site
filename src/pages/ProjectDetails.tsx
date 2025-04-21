import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations/variants";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ProjectDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projectDetails = {
    title: "HashTech Website",
    problem: {
      title: "The Challenge",
      points: [
        "Need for a modern, responsive website to showcase HashTech's services and expertise",
        "Requirement for a platform that effectively communicates the company's value proposition",
        "Need for a scalable solution that can grow with the business",
        "Challenges in maintaining consistent branding and user experience across different sections"
      ]
    },
    solution: {
      title: "Our Solution",
      points: [
        "Developed a modern, responsive website using React and TypeScript",
        "Implemented a clean, professional design with smooth animations using Framer Motion",
        "Created a modular component structure for easy maintenance and scalability",
        "Integrated Tailwind CSS for consistent styling and rapid development",
        "Implemented responsive design principles for optimal viewing across all devices"
      ]
    },
    features: [
      {
        title: "Modern UI/UX",
        description: "Clean, intuitive interface with smooth animations and transitions",
        icon: "🎨"
      },
      {
        title: "Responsive Design",
        description: "Seamless experience across desktop, tablet, and mobile devices",
        icon: "📱"
      },
      {
        title: "Performance Optimized",
        description: "Fast loading times and smooth interactions using modern web technologies",
        icon: "⚡"
      },
      {
        title: "SEO Friendly",
        description: "Built with search engine optimization best practices in mind",
        icon: "🔍"
      }
    ]
  };

  return (
    <section className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div variants={fadeIn} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {projectDetails.title}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A modern, responsive website showcasing HashTech's services and expertise
            </p>
          </motion.div>

          {/* Problem Section */}
          <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-hashtech-blue">
              {projectDetails.problem.title}
            </h2>
            <ul className="space-y-4">
              {projectDetails.problem.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-hashtech-orange mr-2">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Section */}
          <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-hashtech-blue">
              {projectDetails.solution.title}
            </h2>
            <ul className="space-y-4">
              {projectDetails.solution.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-hashtech-orange mr-2">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectDetails.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-hashtech-blue">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-hashtech-blue">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React"
                  className="h-16 w-16 mb-2"
                />
                <span className="text-gray-700">React</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                  alt="TypeScript"
                  className="h-16 w-16 mb-2"
                />
                <span className="text-gray-700">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="Tailwind CSS"
                  className="h-16 w-16 mb-2"
                />
                <span className="text-gray-700">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                  alt="AWS"
                  className="h-16 w-16 mb-2"
                />
                <span className="text-gray-700">AWS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails; 