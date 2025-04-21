import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../animations/variants";
import { useForm } from "react-hook-form";
import { FiMap, FiMail, FiPhone, FiSend, FiCheck } from "react-icons/fi";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form handling
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setFormSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-hashtech-blue font-semibold mb-2 block">GET IN TOUCH</span>
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you! Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            className="space-y-8"
          >
            <motion.div variants={fadeInLeft}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to us through any of the channels below. We're here to help you
                bring your ideas to life!
              </p>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="flex items-start gap-4"
            >
              <div className="bg-white p-3 rounded-lg shadow-md text-hashtech-blue">
                <FiMap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Our Location</h4>
                <p className="text-gray-600">Delhi, India</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="flex items-start gap-4"
            >
              <div className="bg-white p-3 rounded-lg shadow-md text-hashtech-blue">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email Address</h4>
                <p className="text-gray-600">hashtech713@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="flex items-start gap-4"
            >
              <div className="bg-white p-3 rounded-lg shadow-md text-hashtech-blue">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone Number</h4>
                <p className="text-gray-600">+91 8430020971</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInLeft}
              className="mt-10"
            >
              <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
              <div className="space-y-2">
                <p className="text-gray-600 flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </p>
                <p className="text-gray-600 flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM IST</span>
                </p>
                <p className="text-gray-600 flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <FiCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-hashtech-blue/20 focus:border-hashtech-blue`}
                        placeholder="John Doe"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name.message as string}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-hashtech-blue/20 focus:border-hashtech-blue`}
                        placeholder="john@example.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email.message as string}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-hashtech-blue/20 focus:border-hashtech-blue`}
                      placeholder="Project Inquiry"
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.subject.message as string}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-hashtech-blue/20 focus:border-hashtech-blue`}
                      placeholder="Tell us about your project..."
                      {...register("message", { required: "Message is required" })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message as string}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="button-primary w-full flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <FiSend />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
