import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiClock, FiStar, FiBarChart2, FiCheckCircle } from "react-icons/fi";
import { projects } from "../../data/projects";
import Layout from "../../components/layout/Layout";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project with the matching slug
    const foundProject = projects.find((p) => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto py-32 px-6 min-h-screen flex items-center justify-center">
          <div className="animate-spin h-10 w-10 border-4 border-hashtech-blue border-t-transparent rounded-full"></div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto py-32 px-6 min-h-screen">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Project not found</h1>
            <p className="text-gray-600 mb-8">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/" className="button-primary inline-block">
              Return to home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero section */}
      <div
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-gray-900 to-hashtech-blue overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(26, 75, 156, 0.8)), url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center text-white opacity-80 hover:opacity-100 mb-8 transition-opacity"
            >
              <FiArrowLeft className="mr-2" /> Back to projects
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project details */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <FiClock className="text-red-600 w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">The Challenge</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FiStar className="text-hashtech-blue w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Our Solution</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <FiBarChart2 className="text-green-600 w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">The Results</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {project.results}
                </p>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FiCheckCircle className="text-hashtech-blue mr-2" /> Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {generateAchievements(project.results).map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-hashtech-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-hashtech-blue" />
                        </div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-gray-300 text-lg mb-10">
              Let's discuss how we can help you achieve similar results with a custom solution
              tailored to your specific needs.
            </p>
            <Link
              to="/#contact"
              className="button-primary inline-block text-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

// Helper function to extract achievements from results text
const generateAchievements = (resultsText: string) => {
  // Extract numerical achievements from the results text
  const achievements = [];

  // Regular expression to find percentages, specific metrics
  const regex = /(\d+%|\d+\.\d+%|\$\d+\.?\d*[MK]?|reduced|improved|increased|eliminated|cut|achieved)/gi;

  // Use results text as a base and break it into parts
  const sentences = resultsText.split(/\.\s+/);

  // Gather achievements from sentences
  for (const sentence of sentences) {
    if (sentence.match(regex)) {
      achievements.push(sentence + ".");
    }
  }

  // If we couldn't extract specific achievements, return generic ones
  if (achievements.length === 0) {
    return [
      "Successfully delivered the project on time and within budget.",
      "Received positive client feedback on the solution's quality and usability.",
      "Created a maintainable system that can be easily updated and expanded.",
      "Delivered a solution that directly addressed the client's business challenges."
    ];
  }

  return achievements;
};

export default ProjectDetail;
