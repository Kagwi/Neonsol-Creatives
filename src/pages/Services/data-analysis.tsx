import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const analysisFeatures = [
  {
    title: "Exploratory Data Analysis",
    description:
      "Understand trends, outliers, and patterns in your data using statistical and visual techniques.",
    icon: "📊",
  },
  {
    title: "Data Visualization",
    description:
      "Interactive dashboards and compelling visual reports to help communicate insights clearly.",
    icon: "📈",
  },
  {
    title: "Predictive Analytics",
    description:
      "Use historical data to predict future trends and behavior, improving decision-making.",
    icon: "🔮",
  },
  {
    title: "Business Intelligence",
    description:
      "Turn raw data into business insights with customized BI tools and KPIs.",
    icon: "📌",
  },
];

const analysisProcess = [
  {
    title: "Data Collection",
    description: "We help identify and gather relevant data from various sources.",
  },
  {
    title: "Data Cleaning",
    description: "We ensure accuracy by handling missing values, outliers, and formatting.",
  },
  {
    title: "Analysis & Modeling",
    description: "We use statistical and machine learning models to uncover trends.",
  },
  {
    title: "Visualization & Reporting",
    description: "We present the insights through intuitive visualizations and summaries.",
  },
];

const DataAnalysis = () => (
  <div className="bg-white text-gray-900">
    {/* Hero Section */}
    <section
      className="relative pt-32 pb-6 bg-secondary-950 bg-blend-overlay bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://raw.githubusercontent.com/Kagwi/Neonsol-Creatives/refs/heads/main/public/pexels-david-geib-1265112-3220850.jpg")',
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-primary-600">Data Analysis Services</span>
          </h1>
          <p
            className="text-secondary-200 text-xl mb-0 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            Transform raw data into actionable insights with our advanced analytics services.
          </p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <a href="#overview" aria-label="Scroll down">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>

    {/* Overview Section */}
    <div
      id="overview"
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
          Data Analytics & Insights
        </motion.h1>
        <motion.p
          className="text-xl text-white/80 mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Empower your decisions through data visualization, analysis, and predictive intelligence.
        </motion.p>
      </div>
    </div>

    {/* Features Section */}
    <section className="pt-0 pb-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {analysisFeatures.map((feature, idx) => (
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
        <h2 className="text-3xl font-bold text-center mb-12">Our Data Analysis Process</h2>
        <div className="flex flex-col gap-12">
          {analysisProcess.map((step, idx) => (
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
      <h2 className="text-3xl font-bold mb-4">Ready to Turn Data Into Strategy?</h2>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        From dashboards to data mining, we help you unlock insights and make data-driven decisions.
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

export default DataAnalysis;
