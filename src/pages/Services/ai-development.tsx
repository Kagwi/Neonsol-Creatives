import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const aiFeatures = [
  {
    title: "Custom AI Models",
    description:
      "We build tailored machine learning models for predictive analytics, customer segmentation, and automation.",
    icon: "🤖",
  },
  {
    title: "AI Chatbots & Assistants",
    description:
      "Conversational AI tools that improve customer service and streamline support workflows.",
    icon: "💬",
  },
  {
    title: "Computer Vision",
    description:
      "Image recognition, object detection, and video analytics using cutting-edge deep learning.",
    icon: "🧠",
  },
  {
    title: "Natural Language Processing",
    description:
      "Text analysis, sentiment detection, and summarization models for smarter communication.",
    icon: "📄",
  },
];

const processSteps = [
  {
    title: "Problem Discovery",
    description: "We work with you to understand pain points and define goals for your AI solution.",
  },
  {
    title: "Data Strategy",
    description: "We help gather, clean, and prepare data for training AI models.",
  },
  {
    title: "Model Development",
    description: "We build and train machine learning models tailored to your use case.",
  },
  {
    title: "Deployment & Monitoring",
    description: "We deploy the solution and monitor its performance for continuous improvement.",
  },
];

const AiDevelopment = () => {
  const scrollToHero = () => {
    const heroSection = document.getElementById("ai-development-hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <section
        className="pt-32 pb-6 bg-secondary-950 bg-blend-overlay bg-cover bg-center text-white relative"
        style={{
          backgroundImage:
            'url("https://raw.githubusercontent.com/Kagwi/Neonsol-Creatives/refs/heads/main/public/pexels-david-geib-1265112-3220850.jpg")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-primary-600">Artificial Intelligence Services</span>
            </h1>
            <p
              className="text-secondary-200 text-xl mb-8 animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              Contact us today for any of the following services!
            </p>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <button
          onClick={scrollToHero}
          aria-label="Scroll down to AI Development section"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* AI Development Hero */}
      <div
        id="ai-development-hero"
        className="w-full bg-cover bg-center bg-no-repeat pt-12 pb-0 text-center text-white"
        style={{ backgroundAttachment: "fixed" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI Development
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Custom AI solutions tailored to your business needs, from machine learning models to intelligent assistants.
          </motion.p>
        </div>
      </div>

      {/* Features Section */}
      <section className="pt-0 pb-16 px-6 max-w-6xl mx-auto text-center bg-gradient-to-r from-orange-50 to-white rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-orange-700">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {aiFeatures.map((feature, idx) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Development Process</h2>
          <div className="flex flex-col gap-12">
            {processSteps.map((step, idx) => (
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
        <h2 className="text-3xl font-bold mb-4">Let's Build Smarter Together</h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Whether you're looking to automate tasks or unlock insights from data, our AI experts are ready to help.
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
};

export default AiDevelopment;
