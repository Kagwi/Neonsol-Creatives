import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers } from '../data/team';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // Slower count-up effect
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <div className="text-primary-600 text-5xl font-bold mb-2">{count}+</div>;
};

function AboutPage() {
  return (
    <>
      {/* Hero Section with background image */}
      <section className="pt-32 pb-20 text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}>
        <div className="container mx-auto px-4 bg-secondary-950/80 backdrop-blur-md rounded-lg py-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              About <span className="text-primary-500">Neonsol</span> Creatives
            </h1>
            <p className="text-secondary-200 text-xl mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              We're a team of passionate technologists dedicated to creating innovative solutions that help businesses thrive in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Mission</h2>
              <p className="text-secondary-700 leading-relaxed">
                To empower businesses and communities by delivering transformative digital solutions that drive innovation, efficiency, and growth.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Vision</h2>
              <p className="text-secondary-700 leading-relaxed">
                To be a globally recognized creative technology partner, renowned for our ability to transform ideas into impactful, lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with background video */}
      <section className="relative py-28 bg-black text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.coverr.co/videos/coverr-night-traffic-in-the-city-2373/1080p.mp4" type="video/mp4" />
        </video>
        <div className="relative container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Counter end={10} duration={4} />
              <div className="text-secondary-300 text-lg">Years Experience</div>
            </div>
            <div>
              <Counter end={200} duration={4} />
              <div className="text-secondary-300 text-lg">Projects Completed</div>
            </div>
            <div>
              <Counter end={50} duration={4} />
              <div className="text-secondary-300 text-lg">Team Members</div>
            </div>
            <div>
              <Counter end={98} duration={4} />
              <div className="text-secondary-300 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* The rest of the page continues as it is, already styled aesthetically */}
    </>
  );
}

export default AboutPage;
