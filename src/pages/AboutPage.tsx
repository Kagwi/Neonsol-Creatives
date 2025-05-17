import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

function AboutPage() {
  // State for count up animation
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [team, setTeam] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const duration = 5000; // Total animation duration in ms
    const increments = {
      years: 10,
      projects: 200,
      team: 50,
      satisfaction: 98
    };

    const animateValue = (setter, end) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * end);
        setter(current);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
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
      {/* Hero Section with background image */}
      <section
        className="pt-32 pb-20 text-white bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')",
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            About <span className="text-primary-600">Neonsol</span> Creatives
          </h1>
          <p
            className="text-secondary-200 text-xl mb-8 animate-slide-up"
            style={{ animationDelay: '200ms' }}
          >
            We're a team of passionate technologists dedicated to creating innovative solutions that help businesses thrive in the digital era.
          </p>
        </div>
      </section>

      {/*Mission and Vision Section*/}
        <section className="py-20 bg-black">
  <style>{`
    @keyframes border-glow {
      0% { box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.7); }
      100% { box-shadow: 0 0 10px 5px rgba(255, 165, 0, 0); }
    }
    @keyframes slideInLeft {
      from { transform: translateX(-50px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInRight {
      from { transform: translateX(50px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `}</style>
  
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="grid md:grid-cols-2 gap-12">
      <div 
        className="p-8 rounded-xl border-2 border-orange-500 animate-border-glow"
        style={{
          animation: 'slideInLeft 0.8s ease-out',
          background: 'rgba(0, 0, 0, 0.7)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)'
        }}
      >
        <h2 className="text-3xl font-bold text-orange-400 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-300 leading-relaxed">
          To empower businesses through innovative digital solutions that drive growth and create lasting value. 
          We combine technical excellence with deep industry knowledge to deliver transformative results.
        </p>
      </div>

      <div 
        className="p-8 rounded-xl border-2 border-orange-500 animate-border-glow"
        style={{
          animation: 'slideInRight 0.8s ease-out',
          background: 'rgba(0, 0, 0, 0.7)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)'
        }}
      >
        <h2 className="text-3xl font-bold text-orange-400 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-300 leading-relaxed">
          To be the global leader in digital innovation, shaping a future where technology elevates human potential 
          and creates sustainable value for all stakeholders.
        </p>
      </div>
    </div>
  </div>
</section>
            {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Neonsol Creatives Office"
                className="rounded-lg shadow-medium"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                A Journey of Innovation and Excellence
              </h2>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Founded in 2015 by Sandra Chen, Neonsol Creatives began with a simple yet ambitious vision: to
                bridge the gap between cutting-edge technology and creative problem-solving. What started as a
                small team working out of a co-working space has grown into a thriving company with a global
                presence and a diverse portfolio of clients.
              </p>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Over the years, we've remained true to our founding principles: innovation, quality, and
                client satisfaction. Our team has expanded to include some of the brightest minds in the
                industry, all united by a passion for creating technology solutions that make a difference.
              </p>
              <p className="text-secondary-600 mb-8 leading-relaxed">
                Today, Neonsol Creatives stands as a leader in the tech industry, known for our forward-thinking
                approach and commitment to excellence. We continue to push boundaries, explore new possibilities,
                and help our clients navigate the ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">The Principles That Guide Us</h2>
            <p className="text-secondary-600 text-lg leading-relaxed">
              At Neonsol Creatives, our values define who we are and how we approach our work every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">Innovation</h3>
              <p className="text-secondary-600 leading-relaxed">
                We embrace creativity and forward-thinking to develop solutions that address today's challenges and anticipate tomorrow's needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">Integrity</h3>
              <p className="text-secondary-600 leading-relaxed">
                We operate with honesty, transparency, and ethical standards in all our interactions, building trust with our clients and partners.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">Collaboration</h3>
              <p className="text-secondary-600 leading-relaxed">
                We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">Excellence</h3>
              <p className="text-secondary-600 leading-relaxed">
                We strive for excellence in everything we do, maintaining the highest standards of quality and performance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">Growth</h3>
              <p className="text-secondary-600 leading-relaxed">
                We are committed to continuous learning and improvement, for ourselves and our clients, adapting to new challenges and opportunities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="h-16 w-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-900">Client Satisfaction</h3>
              <p className="text-secondary-600 leading-relaxed">
                We measure our success by the success of our clients, focusing on delivering solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section> 
      
      {/* Stats Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="https://cdn.videvo.net/videvo_files/video/free/2017-06/small_watermarked/170520_City_Night_03_1080p_preview.webm"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center z-10 relative">
            {[
              { value: years, suffix: '+', label: 'Years Experience' },
              { value: projects, suffix: '+', label: 'Projects Completed' },
              { value: team, suffix: '+', label: 'Team Members' },
              { value: satisfaction, suffix: '%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-primary-400 text-5xl font-bold mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-secondary-200 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">Ready to Work With Us?</h2>
            <p className="text-secondary-600 text-lg mb-8 max-w-2xl mx-auto">
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
