import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const seoFeatures = [
  {
    title: "Keyword Research",
    description:
      "We identify the best keywords for your niche to ensure high search visibility and relevant traffic.",
    icon: "🔍",
  },
  {
    title: "On-Page SEO",
    description:
      "From meta tags to content optimization, we enhance every page to align with SEO best practices.",
    icon: "🛠️",
  },
  {
    title: "Technical SEO",
    description:
      "We optimize site structure, performance, and crawlability to boost your search engine ranking.",
    icon: "⚙️",
  },
  {
    title: "Link Building",
    description:
      "High-quality backlink strategies that build your website authority and drive organic traffic.",
    icon: "🔗",
  },
];

const seoProcess = [
  {
    title: "SEO Audit",
    description: "We evaluate your website’s current performance to find opportunities and issues.",
  },
  {
    title: "Strategy Development",
    description: "We define the right mix of keywords, content, and structure for your goals.",
  },
  {
    title: "Execution",
    description: "We implement technical fixes, content changes, and optimizations.",
  },
  {
    title: "Performance Tracking",
    description: "We monitor and report results to refine strategies for ongoing improvement.",
  },
];

const Seo = () => (
  <div className="bg-white text-gray-900">
    {/* Hero Section */}
    <section
      className="pt-32 pb-20 bg-secondary-950 bg-blend-overlay bg-cover bg-center text-white"
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
            <span className="text-primary-600">SEO Optimization</span>
          </h1>
          <p
            className="text-secondary-200 text-xl mb-8 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            Improve your online visibility and drive organic traffic through data-driven SEO strategies.
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
          Data-Driven SEO That Delivers Results
        </motion.h1>
        <motion.p
          className="text-xl text-white/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From audits to link building, we help your website climb the search rankings effectively.
        </motion.p>
        {/* Removed "Get Started" button here */}
      </div>
    </div>

    {/* Features Section */}
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {seoFeatures.map((feature, idx) => (
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
        <h2 className="text-3xl font-bold text-center mb-12">Our SEO Optimization Process</h2>
        <div className="flex flex-col gap-12">
          {seoProcess.map((step, idx) => (
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
      <h2 className="text-3xl font-bold mb-4">Grow Your Visibility with Confidence</h2>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Our SEO experts are ready to help you climb the search engine ranks and drive sustainable traffic.
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

export default Seo;
