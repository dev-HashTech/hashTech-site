import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { fadeIn, fadeInDown, fadeInUp, staggerContainer } from "../../animations/variants";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Random dots for the background pattern
  const generateDots = () => {
    const dots = [];
    for (let i = 0; i < 40; i++) {
      const size = Math.random() * 6 + 2;
      dots.push(
        <motion.div
          key={i}
          className="absolute rounded-full bg-hashtech-blue/10"
          style={{
            width: size,
            height: size,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: Math.random() * 5,
          }}
        />
      );
    }
    return dots;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 hero-pattern -z-10">
        {generateDots()}
      </div>

      {/* Large background circle */}
      <motion.div
        className="absolute right-0 bottom-0 -z-10 opacity-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.05,
          transition: { duration: 1.5, ease: "easeOut" }
        }}
      >
        <div className="w-[500px] h-[500px] bg-hashtech-blue rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          <div className="w-full lg:w-1/2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={controls}
              className="space-y-6"
            >
              <motion.span
                variants={fadeInDown}
                className="inline-block bg-gray-100 text-hashtech-blue px-4 py-2 rounded-full text-sm font-medium"
              >
                Next-Gen IT Solutions
              </motion.span>

              <motion.h1
                variants={fadeInDown}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Transforming Ideas Into
                <span className="block hashtech-gradient-text pb-2">Digital Reality</span>
              </motion.h1>

              <motion.p
                variants={fadeInDown}
                className="text-gray-600 text-lg max-w-xl"
              >
                We craft cutting-edge software solutions that empower businesses
                to thrive in the digital age. From web applications to mobile
                experiences, we deliver excellence.
              </motion.p>

              <motion.div
                variants={fadeInDown}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.a
                  href="#contact"
                  className="button-primary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project <FiArrowRight />
                </motion.a>

                <motion.a
                  href="#services"
                  className="button-secondary flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Services
                </motion.a>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="pt-8 flex items-center gap-8"
              >
                <div>
                  <p className="text-gray-500 text-sm">Founded</p>
                  <p className="text-2xl font-bold text-hashtech-blue">2024</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <p className="text-gray-500 text-sm">Projects Completed</p>
                  <p className="text-2xl font-bold text-hashtech-blue">10+</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <p className="text-gray-500 text-sm">Satisfaction Rate</p>
                  <p className="text-2xl font-bold text-hashtech-blue">98%</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: 0.5
                }
              }}
              className="relative z-10"
            >
              {/* Hero Illustration - Abstract Code/Tech Visualization */}
              <div className="relative">
                <div className="relative w-full h-[450px] bg-gradient-to-br from-hashtech-blue/10 to-hashtech-orange/10 rounded-2xl overflow-hidden">
                  {/* Code-like animated lines */}
                  <CodeAnimation />

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-10 right-12 bg-white rounded-xl shadow-lg p-4 w-32 h-32 flex items-center justify-center"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <img
                      src="/images/logo.png"
                      alt="HashTech Logo"
                      className="w-20 h-20"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-16 left-10 bg-hashtech-blue text-white rounded-xl shadow-lg p-4 w-36"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <p className="text-xs">Web Solutions</p>
                    </div>
                    <p className="text-lg font-bold mt-1">React • Next.js</p>
                  </motion.div>

                  <motion.div
                    className="absolute top-32 left-16 bg-hashtech-orange text-white rounded-xl shadow-lg p-4 w-40"
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 2
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                      <p className="text-xs">Mobile Apps</p>
                    </div>
                    <p className="text-lg font-bold mt-1">React Native</p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-32 right-8 bg-white rounded-xl shadow-lg p-4 w-40"
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, -3, 0],
                    }}
                    transition={{
                      duration: 5.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 0.5
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <p className="text-xs">DevOps & DB</p>
                    </div>
                    <p className="text-lg font-bold mt-1 text-gray-700">Cloud Solutions</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 3
        }}
      >
        <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-hashtech-blue"
        >
          <path
            d="M12 5L12 19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
};

// Animated code-like visual elements
const CodeAnimation = () => {
  return (
    <div className="absolute inset-0 flex flex-col gap-3 p-8 overflow-hidden opacity-40">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
          }}
        >
          <div
            className="h-2 bg-hashtech-blue rounded-full"
            style={{ width: `${Math.random() * 40 + 20}%` }}
          ></div>
          <div
            className="h-2 bg-hashtech-orange rounded-full"
            style={{ width: `${Math.random() * 20 + 10}%` }}
          ></div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSection;
