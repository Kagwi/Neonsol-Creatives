// src/pages/AboutPage.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import CountUp from 'react-countup';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers } from '../data/team';

function AboutPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="pt-32 pb-20 bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1549921296-3a6b90b2b2b3?auto=compress&cs=tinysrgb&dpr=2&w=1600')",
        }}
      >
        <div className="container mx-auto px-4 backdrop-blur-sm bg-black/40 rounded-lg py-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary-500">Neonsol</span> Creatives
            </h1>
            <p className="text-secondary-100 text-xl">
              We transform ideas into impactful digital solutions that empower businesses and inspire innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white text-secondary-900">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-secondary-700 text-lg leading-relaxed">
              To deliver cutting-edge digital experiences that solve real-world problems and fuel growth for our clients.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-secondary-700 text-lg leading-relaxed">
              To become a globally recognized creative tech powerhouse known for innovation, impact, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section with Background Video */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        >
          <source src="/videos/city-night.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years Experience', end: 10 },
              { label: 'Projects Completed', end: 200 },
              { label: 'Team Members', end: 50 },
              { label: 'Client Satisfaction', end: 98, suffix: '%' },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-primary-400 text-5xl font-bold mb-2">
                  <CountUp end={item.end} duration={5} suffix={item.suffix || ''} />
                </div>
                <div className="text-secondary-200 text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Team or Story Section could go here */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-secondary-700 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project. Reach out to our team to discuss how we can help you achieve your goals.
            </p>
            <Button to="/contact" variant="primary" size="lg" className="group">
              Get in Touch
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
