import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

function AboutPage() {
  // State for count-up values
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
    const duration = 2000; // total animation time in ms
    const incrementTime = 50; // update interval in ms
    const steps = duration / incrementTime;
    const stepYears = endYears / steps;
    const stepProjects = endProjects / steps;
    const stepTeam = endTeam / steps;
    const stepSatisfaction = endSatisfaction / steps;

    const counter = setInterval(() => {
      start++;
      setYears(prev => Math.min(endYears, Math.floor(prev + stepYears)));
      setProjects(prev => Math.min(endProjects, Math.floor(prev + stepProjects)));
      setTeam(prev => Math.min(endTeam, Math.floor(prev + stepTeam)));
      setSatisfaction(prev => Math.min(endSatisfaction, Math.floor(prev + stepSatisfaction)));

      if (start >= steps) {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="pt-32 pb-20 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <div className="container mx-auto px-4 bg-black bg-opacity-60 rounded-lg max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            About <span className="text-primary-600">Neonsol</span> Creatives
          </h1>
          <p className="text-secondary-200 text-xl mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            We're a team of passionate technologists dedicated to creating innovative solutions that help businesses thrive in the digital era.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-secondary-50 text-secondary-900">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <p className="text-secondary-600 leading-relaxed">
                To empower businesses by transforming ideas into impactful digital solutions that drive growth, innovation, and excellence.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p className="text-secondary-600 leading-relaxed">
                To be a global leader in technology and creative problem-solving, fostering sustainable success for our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white text-secondary-900">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-secondary-600 leading-relaxed">
                We constantly embrace new ideas and technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-secondary-600 leading-relaxed">
                We act honestly and ethically in every aspect of our work, earning trust with transparency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-secondary-600 leading-relaxed">
                We believe teamwork and open communication are key to driving meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-primary-600 text-5xl font-bold mb-2">{years > 0 ? years + "+" : "0"}</div>
              <div className="text-secondary-300 text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-primary-600 text-5xl font-bold mb-2">{projects > 0 ? projects + "+" : "0"}</div>
              <div className="text-secondary-300 text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-primary-600 text-5xl font-bold mb-2">{team > 0 ? team + "+" : "0"}</div>
              <div className="text-secondary-300 text-lg">Team Members</div>
            </div>
            <div>
              <div className="text-primary-600 text-5xl font-bold mb-2">{satisfaction > 0 ? satisfaction + "%" : "0%"}</div>
              <div className="text-secondary-300 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              Ready to Work With Us?
            </h2>
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
