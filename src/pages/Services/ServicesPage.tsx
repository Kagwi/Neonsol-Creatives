import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../../components/Button';
import ServiceCard from '../../components/ServiceCard';
import { services } from '../../data/services';

function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
   {/* Hero Section */}
  <section
    className="pt-32 pb-20 bg-secondary-950 bg-blend-overlay bg-cover bg-center text-white"
    style={{ backgroundImage: "url('/images/services-hero.jpg')" }}
  >
  <div className="container mx-auto px-4">
    <div className="max-w-3xl">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
        Our <span className="text-primary-600">Services</span>
      </h1>
        <p
        className="text-secondary-200 text-xl mb-8 animate-slide-up"
        style={{ animationDelay: '200ms' }}
        >
          Comprehensive technology solutions designed to drive innovation and growth for your business.
        </p>
      </div>
    </div>
  </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">What We Offer</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">Comprehensive Technology Solutions</h2>
              <p className="text-secondary-600 text-lg leading-relaxed">
                From concept to execution, we provide end-to-end services to help you achieve your business goals.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 100} 
                link={service.link} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">How We Work</h2>
            <p className="text-secondary-600 text-lg leading-relaxed">
              Our structured approach ensures efficient delivery of solutions that meet your specific needs.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 z-0"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-2">Step 1</span>
                    <h3 className="text-2xl font-semibold mb-3 text-secondary-900">Discovery</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      We begin by understanding your business, goals, and challenges through in-depth consultations and research.
                    </p>
                  </div>
                  <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white z-20">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left text-center"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right text-center"></div>
                  <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white z-20">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-2">Step 2</span>
                    <h3 className="text-2xl font-semibold mb-3 text-secondary-900">Strategy</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      We develop a detailed roadmap and technical strategy tailored to your specific requirements and objectives.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-2">Step 3</span>
                    <h3 className="text-2xl font-semibold mb-3 text-secondary-900">Design & Development</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      Our expert team designs and builds your solution, focusing on quality, usability, and technical excellence.
                    </p>
                  </div>
                  <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white z-20">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left text-center"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right text-center"></div>
                  <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white z-20">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-2">Step 4</span>
                    <h3 className="text-2xl font-semibold mb-3 text-secondary-900">Testing & Refinement</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      We thoroughly test and refine your solution to ensure optimal performance, security, and user experience.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-2">Step 5</span>
                    <h3 className="text-2xl font-semibold mb-3 text-secondary-900">Launch & Support</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      We deploy your solution and provide ongoing support and maintenance to ensure long-term success.
                    </p>
                  </div>
                  <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center text-white z-20">
                    <span className="text-xl font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 md:text-left text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">Technologies</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">Our Technology Stack</h2>
            <p className="text-secondary-600 text-lg leading-relaxed">
              We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-secondary-50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 13.381h20M8.66 19.05V22m6.84-2.95V22m-8.955-9.778l-1.999 1.999A1 1 0 0 0 4.52 14A1.98 1.98 0 0 0 6 16.17V17a2 2 0 1 0 4 0v-1M2.27 5.27 7 2.5m14.73 2.77L17 2.5m-4 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2m5-9a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 text-center">React</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-secondary-50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8M2 14h6m-4-4h8" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 text-center">Angular</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-secondary-50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8m-4-4h8" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 text-center">Node.js</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-secondary-50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 text-center">Python</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-secondary-50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-5-5z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 12h4m-4 4h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 text-center">AWS</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-secondary-50 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 text-center">TensorFlow</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-secondary-600 text-lg leading-relaxed">
              Find answers to common questions about our services and process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold mb-3 text-secondary-900">How long does it typically take to complete a project?</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, 
                  while a complex enterprise application could take several months. During our initial consultation, 
                  we'll provide a detailed timeline based on your specific requirements.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold mb-3 text-secondary-900">What is your pricing structure?</h3>
                <p className="text-secondary-600 leading-relaxed">
                  We offer flexible pricing models including fixed-price projects, time and materials, and retainer 
                  arrangements. The best approach depends on your project's nature and requirements. We'll discuss 
                  options during our consultation to find the most suitable model for your needs.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold mb-3 text-secondary-900">Do you provide ongoing support after project completion?</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Yes, we offer various support and maintenance packages to ensure your solution continues to 
                  perform optimally. These range from basic technical support to comprehensive managed services 
                  including updates, monitoring, and continuous improvement.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold mb-3 text-secondary-900">Can you work with our existing team?</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Absolutely. We're experienced in collaborative engagements and can integrate seamlessly with 
                  your internal team. We can provide specialized expertise to complement your existing capabilities 
                  or take on specific aspects of a project as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and discover how our services can help your business thrive.
            </p>
            <Button 
              to="/contact" 
              variant="secondary" 
              size="lg" 
              className="group bg-white text-primary-600 hover:bg-secondary-100"
            >
              Get in Touch
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
