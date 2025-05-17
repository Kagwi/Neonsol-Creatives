import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers } from '../data/team';

function Counter({ end, duration = 4000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}+</span>;
}

function AboutPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="pt-32 pb-20 bg-cover bg-center text-white"
        style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              About <span className="text-primary-600">Neonsol</span> Creatives
            </h1>
            <p className="text-secondary-200 text-xl mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              We're a team of passionate technologists dedicated to creating innovative solutions that help businesses thrive in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Mission</h2>
            <p className="text-secondary-600 leading-relaxed">
              To transform ideas into impactful digital solutions that empower businesses and enrich lives through innovation and creativity.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Vision</h2>
            <p className="text-secondary-600 leading-relaxed">
              To be a global leader in technology and design, known for excellence, integrity, and lasting client partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section with Background Video */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/city-night.mp4"
        />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-primary-600 text-5xl font-bold mb-2">
                <Counter end={10} duration={5000} />
              </div>
              <div className="text-secondary-300 text-lg">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 text-5xl font-bold mb-2">
                <Counter end={200} duration={5000} />
              </div>
              <div className="text-secondary-300 text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 text-5xl font-bold mb-2">
                <Counter end={50} duration={5000} />
              </div>
              <div className="text-secondary-300 text-lg">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 text-5xl font-bold mb-2">
                <Counter end={98} duration={5000} />
              </div>
              <div className="text-secondary-300 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
