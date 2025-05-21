"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// Sample features of AI Development
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

// Optional process steps
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
  return (
    <div className="bg-background text-primary">
      {/* Hero Section */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat py-32 text-center"
        style={{
          backgroundImage: "url('/images/ai-bg.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI Development
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Custom AI solutions tailored to your business needs, from machine learning models to intelligent assistants.
          </motion.p>
          <Button variant="secondary" size="lg">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-muted p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-secondary/10 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Development Process</h2>
          <div className="flex flex-col gap-12">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col md:flex-row items-start gap-6",
                  idx % 2 === 1 && "md:flex-row-reverse"
                )}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-secondary-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Build Smarter Together</h2>
        <p className="text-secondary-700 mb-8 max-w-xl mx-auto">
          Whether you're looking to automate tasks or unlock insights from data, our AI experts are ready to help.
        </p>
        <Button size="lg">
          Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default AiDevelopment;
