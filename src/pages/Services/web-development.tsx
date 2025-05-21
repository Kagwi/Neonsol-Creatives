import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const webDevFeatures = [
  {
    title: "Responsive Web Design",
    description:
      "We build mobile-friendly websites that adapt beautifully across all screen sizes and devices.",
    icon: "📱",
  },
  {
    title: "Custom Web Applications",
    description:
      "From dashboards to eCommerce, we deliver powerful web apps tailored to your workflow.",
    icon: "🛠️",
  },
  {
    title: "CMS Integration",
    description:
      "Easily manage your content with seamless integrations to WordPress, Strapi, and other CMS platforms.",
    icon: "🧩",
  },
  {
    title: "Performance Optimization",
    description:
      "Fast load times and SEO-friendly code to keep users engaged and improve your search rankings.",
    icon: "⚡",
  },
];

const webDevProcess = [
  {
    title: "Requirement Gathering",
    description: "We define your website’s purpose, audience, and functional needs.",
  },
  {
    title: "Design & Prototyping",
    description: "We create UI designs and prototypes to visualize the user journey and layout.",
  },
  {
    title: "Development & Testing",
    description: "Our dev team builds and tests your site using best coding practices and the latest frameworks.",
  },
  {
    title: "Launch & Maintenance",
    description: "We deploy the site and offer ongoing support, updates, and security monitoring.",
  },
];

const ScrollDownIndicator = () => (
  <div className="flex flex-col items-center justify-center mt-8 animate-bounce text-white">
    <span className="text-sm uppercase tracking-widest mb-2">Scroll Down</span>
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  </div>
);

const WebDevelopment = () => (
  <div className="bg-white text-gray-900">
    {/* Hero Section */}
    <section
      className="pt-32 pb-20 bg-secondary-950 bg-blend-overlay bg-cover bg-center text-white relative"
      style={{
        backgroundImage:
          'url("https://raw.githubusercontent.com/Kagwi/Neonsol-Creatives/refs/heads/main/public/pexels-david-geib-1265112-3220850.jpg")',
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-primary-600">Web Development</span>
          </h1>
          <p
            className="text-secondary-200 text-xl mb-8 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            Modern, responsive websites and web applications built with the latest technologies and best practices.
          </p>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <ScrollDownIndicator />
    </section>

    {/* Overview Section */}
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-32 text-center text-white"
      style={{ backgroundAttachment: "fixed" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Scalable, Performant Websites
        </motion.h1>
        <motion.p
          className="text-xl text-white/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Delivering fast, functional, and engaging digital experiences tailored to your business goals.
        </motion.p>
      </div>
    </div>

    {/* Features Section */}
    <section className="py-20 px-6 max-w-6xl mx-auto text-center bg-gradient-to-r from-orange-50 to-white rounded-xl shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-orange-700">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {webDevFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            <div className="text-7xl md:text-5xl mb-6">{feature.icon}</div>
            <h3 className="text-2xl md:text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-700 text-lg md:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Process Section */}
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Web Development Process</h2>
        <div className="flex flex-col gap-12">
          {webDevProcess.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-start gap-6 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great</h2>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Whether it’s a simple landing page or a full-stack web app, we turn your ideas into powerful online solutions.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors duration-300"
      >
        Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </section>
  </div>
);

export default WebDevelopment;
