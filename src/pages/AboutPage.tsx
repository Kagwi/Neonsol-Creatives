import React, { useEffect, useState } from 'react';
import { ArrowRight, Lightbulb, Users, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';

function AboutPage() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [team, setTeam] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const animateValue = (start, end, duration, setter) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        setter(value);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    animateValue(0, 10, 1500, setYears);
    animateValue(0, 200, 2000, setProjects);
    animateValue(0, 50, 1800, setTeam);
    animateValue(0, 98, 2200, setSatisfaction);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            About <span className="text-primary-600">Neonsol</span> Creatives
          </h1>
          <p className="text-secondary-200 text-xl mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            We're a team of passionate technologists dedicated to creating innovative solutions that help
            businesses thrive in the digital era.
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
                To empower businesses worldwide by delivering innovative, reliable, and scalable digital solutions
                that drive success and foster growth.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Vision</h2>
              <p className="text-secondary-600 leading-relaxed">
                To be a global leader in digital innovation, recognized for transforming ideas into impactful
                technologies that shape the future.
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
                bridge the gap between cutting-edge technology and creative problem-solving.
              </p>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                What started as a small team working out of a co-working space has grown into a thriving company
                with a global presence and a diverse portfolio of clients.
              </p>
              <p className="text-secondary-600 mb-8 leading-relaxed">
                Today, Neonsol Creatives stands as a leader in the tech industry, known for our forward-thinking
                approach and commitment to excellence.
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
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Lightbulb className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Innovation</h3>
              <p className="text-secondary-600">
                We stay ahead of the curve by embracing new ideas and technologies that drive results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Collaboration</h3>
              <p className="text-secondary-600">
                We believe in the power of teamwork, working closely with our clients and each other.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <ShieldCheck className="mx-auto text-primary-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Integrity</h3>
              <p className="text-secondary-600">
                We uphold the highest standards of honesty, transparency, and accountability in all we do.
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
          type="video/webm"
          playsInline
        />
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
              Let's collaborate on your next project. Reach out to our team to discuss how we can help you
              achieve your goals.
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
