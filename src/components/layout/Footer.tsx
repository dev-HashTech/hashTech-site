import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "DevOps & DB Management", href: "#services" },
      { name: "Data Analysis", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  const socialLinkAnimation = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="HashTech Logo" className="h-12 w-auto bg-white rounded-full p-1" />
              <span className="ml-2 text-2xl font-bold">
                Hash<span className="text-hashtech-orange">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Cutting-edge Software Development and IT Solutions company, delivering innovative tech solutions since 2024.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover="hover"
                variants={socialLinkAnimation}
              >
                <FiGithub className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover="hover"
                variants={socialLinkAnimation}
              >
                <FiLinkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover="hover"
                variants={socialLinkAnimation}
              >
                <FiTwitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover="hover"
                variants={socialLinkAnimation}
              >
                <FiInstagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 text-sm">Delhi, India</p>
              <p className="text-gray-400 text-sm">hashtech713@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} HashTech. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Designed with ❤️ by HashTech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
