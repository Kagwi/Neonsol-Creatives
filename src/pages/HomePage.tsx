import React from 'react';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { ArrowRight, Zap } from 'lucide-react';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

function HomePage() {
  return (
    <>  
    {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-secondary-950 to-secondary-900 flex items-center">
  <div className="absolute inset-0 overflow-hidden">
    <div className="grid grid-cols-5 grid-rows-5 h-full w-full opacity-10">
      {Array.from({ length: 25 }).map((_, i) => (
        <div 
          key={i}
          className="border border-primary-600/30"
          style={{
            animation: `pulse ${7 + Math.random() * 5}s infinite ${Math.random() * 5}s ease-in-out`,
          }}
        ></div>
      ))}
    </div>
  </div>

  <div className="container mx-auto px-4 pt-24 pb-16 lg:pb-32 relative z-10">
    <div className="flex flex-col lg:flex-row lg:items-center">
      
      {/* LEFT TEXT BLOCK */}
      <div className="lg:w-1/2 mb-12 lg:mb-0 animate-slide-up" style={{ animationDelay: '300ms' }}>
        <div className="inline-flex items-center px-4 py-2 bg-primary-600/10 rounded-full text-primary-600 text-sm font-medium mb-6">
          <Zap size={16} className="mr-2" />
          Where Creativity Meets Innovation
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Innovative Tech <br />
          <span className="text-primary-600">Solutions</span> for <br />
          Tomorrow's Challenges
        </h1>
        <p className="text-secondary-300 text-lg mb-8 max-w-lg">
          We create cutting-edge technology solutions that help businesses thrive in the digital age. Discover how our expertise can transform your ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '800ms' }}>
          <Button to="/services" variant="primary" size="lg">
            Explore Our Services
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>
      </div>

      {/* RIGHT IMAGE BLOCK */}
      <div className="lg:w-1/2 relative">
        <div className="relative rounded-xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: '500ms' }}>
          <img 
            src="https://raw.githubusercontent.com/Kagwi/Neonsol-Creatives/refs/heads/main/public/Neonsol%20Sample%202.webp" 
            alt="Neonsol Creatives Team at Work" 
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 animate-slide-up" style={{ animationDelay: '1200ms' }}>
          <div className="h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center">
            <Zap size={24} className="text-primary-600" />
          </div>
          <div>
            <div className="text-secondary-800 font-semibold">Future-Driven</div>
            <div className="text-secondary-600 text-sm">Delivering Tomorrow’s Tech Today</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
{/* Services Section */}
  import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

function AboutPage() {
  // State for count up animation
  var [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [team, setTeam] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const increments = { years: 10, projects: 200, team: 50, satisfaction: 98 };

    const animateValue = (setter, end) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(Math.floor(progress * end));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    animateValue(setYears, increments.years);
    animateValue(setProjects, increments.projects);
    animateValue(setTeam, increments.team);
    animateValue(setSatisfaction, increments.satisfaction);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white bg-cover bg-center relative"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')",
          backgroundAttachment: 'fixed'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            About <span className="text-primary-600">Neonsol</span> Creatives
          </h1>
          <p className="text-secondary-200 text-xl mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            We're a team of passionate technologists dedicated to creating innovative solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl border-2 border-orange-500/30 animate-fade-in">
              <h2 className="text-3xl font-bold text-orange-400 mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses through innovative digital solutions that drive growth and create lasting value.
              </p>
            </div>
            <div className="p-8 rounded-xl border-2 border-orange-500/30 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl font-bold text-orange-400 mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the global leader in digital innovation, shaping a future where technology elevates human potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Cutting-Edge <span className="text-orange-500">Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'AI Development',
                description: 'Build intelligent systems with machine learning and neural networks',
                icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM8 8h8m-8 4h8m-4 4h4'
              },
              {
                title: 'Web Development',
                description: 'Create high-performance websites and web applications',
                icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
              },
              {
                title: 'Mobile Apps',
                description: 'Cross-platform apps with native performance',
                icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
              },
              {
                title: 'Data Analysis',
                description: 'Transform data into actionable insights',
                icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
              },
              {
                title: 'UX/UI Design',
                description: 'User-centered interfaces with perfect aesthetics',
                icon: 'M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z'
              },
              {
                title: 'SEO Optimization',
                description: 'Boost search rankings and organic traffic',
                icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-black p-8 rounded-2xl border-2 border-orange-500/20 hover:border-orange-500 
                          transition-all duration-300 hover:shadow-orange-glow group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <svg 
                      className="w-8 h-8 text-orange-400"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400">{service.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              to="/services" 
              variant="primary" 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 transition-colors"
            >
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 text-white bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border-b-4 border-orange-500">
              <div className="text-5xl font-bold mb-2">{years}+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="p-6 border-b-4 border-orange-500">
              <div className="text-5xl font-bold mb-2">{projects}+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="p-6 border-b-4 border-orange-500">
              <div className="text-5xl font-bold mb-2">{team}+</div>
              <div className="text-gray-400">Expert Team</div>
            </div>
            <div className="p-6 border-b-4 border-orange-500">
              <div className="text-5xl font-bold mb-2">{satisfaction}%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
{/*About Us Section*/}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row lg:items-center">
      {/* Image Block */}
      <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-left">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/19805876/pexels-photo-19805876/free-photo-of-man-working-on-computer-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Our Team"
            className="rounded-xl shadow-medium"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-md animate-fade-in-up delay-300">
            <div className="text-4xl font-bold">98%</div>
            <div className="text-sm font-medium mt-1">Client Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Text Block */}
      <div className="lg:w-1/2 lg:pl-16 animate-fade-in-right">
        <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
          About Us
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6 animate-fade-in-up">
          Pioneering Excellence in Tech Innovation
        </h2>
        <p className="text-secondary-600 mb-6 leading-relaxed animate-fade-in-up">
          Neonsol Creatives transforms ideas into impactful digital solutions by 
          blending innovative design, strategic thinking, and cutting-edge technology to help brands thrive in the digital age.
        </p>
        <p className="text-secondary-600 mb-8 leading-relaxed animate-fade-in-up">
          Whether you're looking to gain insights from complex datasets, craft compelling digital experiences, or build scalable web solutions, 
          Neonsol Creatives delivers tailored strategies that drive measurable results.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {[
            "Innovative Approach",
            "Expert Team",
            "Client-Centered",
            "Proven Results",
          ].map((text, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'both' }}
            >
              <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-secondary-700 font-medium">{text}</span>
            </div>
          ))}
        </div>

        <div className="animate-fade-in-up delay-300">
          <Button to="/about" variant="primary" size="lg" className="group">
            Learn More About Us
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Testimonials Section */}
      <section className="py-24 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-white text-primary-600 rounded-full text-sm font-medium mb-4">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-primary-100 text-lg leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with Neonsol Creatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-medium p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 mb-10 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                  Ready to Transform Your <br />
                  <span className="text-primary-600">Digital Presence</span>?
                </h2>
                <p className="text-secondary-600 mb-8 max-w-2xl leading-relaxed">
                  Let's work together to create innovative solutions that drive your business forward. 
                  Our team is ready to help you navigate the complexities of modern technology and achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button to="/contact" variant="primary" size="lg">
                    Get Started Today
                  </Button>
                  <Button to="/services" variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
