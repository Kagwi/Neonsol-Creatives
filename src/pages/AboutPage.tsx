import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers } from '../data/team';
import CountUp from 'react-countup';

function AboutPage() {
  useEffect(() => {
    // Trigger any needed animations or additional JS
  }, []);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516116216624-53e697fedbe0?auto=format&fit=crop&w=1950&q=80)' }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              About <span className="text-primary-400">Neonsol</span> Creatives
            </h1>
            <p className="text-white/80 text-xl mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              We're a team of passionate technologists dedicated to creating innovative solutions that help businesses thrive in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Mission</h2>
              <p className="text-secondary-700 text-lg">
                To empower businesses through innovative technology and creative solutions that drive success in a dynamic digital world.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Vision</h2>
              <p className="text-secondary-700 text-lg">
                To be a global leader in creative tech solutions, fostering a future where innovation transforms everyday life and business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">...</section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">...</section>

      {/* Stats Section with CountUp and Background Video */}
      <section className="relative py-20 text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        >
          <source src="https://cdn.coverr.co/videos/coverr-night-traffic-in-the-city-0132/1080p.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 container mx-auto px-4 bg-black/60 backdrop-blur-sm p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-primary-400 text-5xl font-bold mb-2">
                <CountUp end={10} duration={3} />+
              </div>
              <div className="text-white/80 text-lg">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-primary-400 text-5xl font-bold mb-2">
                <CountUp end={200} duration={3} />+
              </div>
              <div className="text-white/80 text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-primary-400 text-5xl font-bold mb-2">
                <CountUp end={50} duration={3} />+
              </div>
              <div className="text-white/80 text-lg">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-primary-400 text-5xl font-bold mb-2">
                <CountUp end={98} duration={3} />%
              </div>
              <div className="text-white/80 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-tr from-secondary-50 to-white">...</section>
    </>
  );
}

export default AboutPage;
