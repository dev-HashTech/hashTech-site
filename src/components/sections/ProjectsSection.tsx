import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";
import { staggerContainer, fadeInUp } from "../../animations/variants";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeProject, setActiveProject] = useState(0);

  const handlePrevious = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-hashtech-blue font-semibold mb-2 block">OUR PORTFOLIO</span>
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-600">
            Explore some of our recent projects that showcase our expertise and commitment to delivering
            high-quality solutions across various industries.
          </p>
        </motion.div>

        {/* Project Showcase - Mobile Slider */}
        <div className="lg:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={projects[activeProject].image}
                      alt={projects[activeProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <span className="text-xs font-semibold uppercase tracking-wider bg-hashtech-blue px-2 py-1 rounded">
                          {projects[activeProject].category}
                        </span>
                        <h3 className="text-xl font-bold mt-2">
                          {projects[activeProject].title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {projects[activeProject].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[activeProject].technologies.map((tech, index) => (
                        <span
                          key={`${tech}-${index}`}
                          className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/projects/${projects[activeProject].slug}`}
                      className="text-hashtech-blue font-medium inline-flex items-center gap-1"
                    >
                      View Project Details <FiExternalLink />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous project"
              >
                <FiArrowLeft className="w-5 h-5 text-gray-700" />
              </button>

              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    onClick={() => setActiveProject(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeProject === index
                        ? "bg-hashtech-blue"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next project"
              >
                <FiArrowRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Grid - Desktop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:grid grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="button-primary inline-block"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="relative group rounded-xl overflow-hidden shadow-lg h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end"
        animate={{
          opacity: isHovered ? 1 : 0.9,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="p-8"
          animate={{
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-hashtech-blue px-2 py-1 rounded text-white mb-3">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-200 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string, i: number) => (
                <span
                  key={`${tech}-${i}`}
                  className="text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              to={`/projects/${project.slug}`}
              className="text-white font-medium inline-flex items-center gap-1 mt-2 group"
            >
              View Project Details{" "}
              <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
