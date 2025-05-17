import React from 'react';
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
<section className="py-24 bg-secondary-900">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
        Our Services
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        Transformative Technology Solutions
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed">
        We offer a comprehensive range of services designed to help your business innovate, grow, and stay ahead of the competition.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        {
          title: 'AI Development',
          description: 'Build intelligent systems with machine learning and neural networks for predictive analytics and automation'
        },
        {
          title: 'Web Development',
          description: 'Create responsive, high-performance websites and web applications with modern frameworks'
        },
        {
          title: 'Mobile App Development',
          description: 'Develop cross-platform mobile applications with native performance and intuitive UX'
        },
        {
          title: 'Data Analysis',
          description: 'Transform raw data into actionable insights with advanced analytics and visualization'
        },
        {
          title: 'UX/UI Design',
          description: 'Craft user-centered interfaces that combine aesthetics with exceptional functionality'
        },
        {
          title: 'SEO Optimization',
          description: 'Boost search rankings and organic traffic through technical and content optimization'
        }
      ].map((service, index) => (
        <div 
          key={index}
          className="bg-black p-6 rounded-xl border-2 border-gray-800 transition-all 
                    duration-300 hover:border-orange-500 hover:shadow-[0_0_25px_rgba(255,165,0,0.2)]
                    group cursor-default"
        >
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
            {service.description}
          </p>
        </div>
      ))}
    </div>

    <div className="text-center mt-16">
      <Button to="/services" variant="primary" size="lg" className="group bg-orange-500 hover:bg-orange-600">
        View All Services
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </div>
  </div>
</section>
      
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
