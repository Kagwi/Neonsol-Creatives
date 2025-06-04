import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const mobileFeatures = [
  {
    title: "iOS & Android Apps",
    description:
      "We build high-performance native apps tailored to each platform’s design and performance standards.",
    icon: "📱",
  },
  {
    title: "Cross-Platform Development",
    description:
      "Using Flutter or React Native, we create apps that run smoothly on both iOS and Android from a single codebase.",
    icon: "🔁",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive, and user-friendly interfaces that keep users engaged and satisfied.",
    icon: "🎨",
  },
  {
    title: "App Store Deployment",
    description:
      "We handle publishing and updating your app on the App Store and Google Play with full compliance.",
    icon: "🚀",
  },
];

const mobileProcess = [
  {
    title: "Discovery & Planning",
    description: "We understand your goals, users, and product vision to define the roadmap.",
  },
  {
    title: "Design & Prototyping",
    description: "Wireframes and interactive prototypes bring your concept to life visually.",
  },
  {
    title: "Development",
    description: "Agile development using the latest mobile technologies for speed and quality.",
  },
  {
    title: "Launch & Support",
    description: "We assist with app store launch, updates, and ongoing maintenance.",
  },
];

const MobileDevelopment = () => (
  <div className="bg-white text-gray-900 m-0 p-0">
    {/* Hero Section */}
    <section
      className="pt-0 pb-20 bg-secondary-950 bg-blend-overlay bg-cover bg-center text-white"
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
            <span className="text-primary-600">Mobile App Development</span>
          </h1>
          <p
            className="text-secondary-200 text-xl mb-8 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            Native and cross-platform apps for seamless mobile experiences.
          </p>
        </div>
      </div>
    </section>

    {/* Scroll Down Indicator */}
    <div className="flex justify-center items-center mt-[-40px] mb-10">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-300" />
      </motion.div>
    </div>

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
          Build Mobile Experiences that Delight
        </motion.h1>
        <motion.p
          className="text-xl text-white/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From concept to launch, we craft intuitive mobile apps that users love.
        </motion.p>
      </div>
    </div>

    {/* Features Section */}
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mobileFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition-transform hover:scale-105"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Process Section */}
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our App Development Process</h2>
        <div className="flex flex-col gap-12">
          {mobileProcess.map((step, idx) => (
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
      <h2 className="text-3xl font-bold mb-4">Let’s Launch Your App Idea</h2>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Whether it’s iOS, Android, or both, our mobile dev team is ready to bring your vision to life.
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

export default MobileDevelopment;
