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
    let start = 0;
    const endYears = 10;
    const endProjects = 200;
    const endTeam = 50;
    const endSatisfaction = 98;

    const duration = 2000; // animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / endProjects));

    const incrementCount = (setter, end) => {
      let current = 0;
      const timer = setInterval(() => {
        current++;
        setter(current);
        if (current >= end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    incrementCount(setYears, endYears);
    incrementCount(setProjects, endProjects);
    incrementCount(setTeam, endTeam);
    incrementCount(setSatisfaction, endSatisfaction);

    // Cleanup timers if needed
    return () => {};
  }, []);

  return (
    <>
      {/* Hero Section with background image */}
      <section
        className="pt-32 pb-20 text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        {/* Overlay */}
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

      {/* Mission and Vision Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 text-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Mission</h2>
              <p className="text-secondary-600 leading-relaxed">
                To empower businesses worldwide by delivering innovative, reliable, and scalable digital solutions that drive success and foster growth.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Vision</h2>
              <p className="text-secondary-600 leading-relaxed">
                To be a global leader in digital innovation, recognized for transforming ideas into impactful technologies that shape the future.
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
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">The Principles That Guide Us</h2>
            <p className="text-secondary-600 text-lg leading-relaxed">
              At Neonsol Creatives, our values define who we are and how we approach our work every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ... Your existing value cards ... */}
            {/* For brevity, I'm not repeating the entire values cards code here */}
          </div>
        </div>
      </section>

      {/* Stats Section with background video and count-up */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="https://cdn.videvo.net/videvo_files/video/free/2017-06/small_watermarked/170520_City_Night_03_1080p_preview.webm"
          type="video/webm"
          playsInline
        />
        {/* Overlay to darken video */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center z-10 relative">
            <div>
              <div className="text-primary-600 text-5xl font-bold mb-2">{years}+</div>
              <div className="text-secondary-300 text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-primary-600 text-5xl font-bold mb-2">{projects}+</div>
              <div className="text-secondary-300 text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-primary-600 text-5xl font-bold mb-2">{team}+</div>
              <div className="text-secondary-300 text-lg">Team Members</div>
            </div>
            <div>
              <div className="text-primary-600 text-5xl font-bold mb-2">{satisfaction}%</div>
              <div className="text-secondary-300 text-lg">Client Satisfaction</div>
            </div>
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
