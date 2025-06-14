import React, { useRef } from 'react'; 
import { Phone, Mail, Clock } from 'lucide-react';

function ContactPage() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;
    
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    const mailtoLink = `mailto:neonsolcreatives@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 bg-secondary-950 bg-blend-overlay bg-cover bg-center text-white"
        style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/Kagwi/Neonsol-Creatives/refs/heads/main/public/pexels-david-geib-1265112-3220850.jpg")',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Get in <span className="text-primary-600">Touch</span>
            </h1>
            <p
              className="text-secondary-200 text-xl mb-8 animate-slide-up"
              style={{ animationDelay: '200ms' }}
            >
              Have a question or want to work with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 mb-12 lg:mb-0">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Contact Information</h2>
              <p className="text-secondary-600 mb-8 leading-relaxed">
                Our team is ready to assist you with any questions, inquiries, or project discussions. Feel free to reach out through any of the channels below.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center mr-4 text-primary-600 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 mb-1">Phone</h3>
                    <p className="text-secondary-600">
                      Call Us: 0707 145 000
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center mr-4 text-primary-600 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 mb-1">Email</h3>
                    <p className="text-secondary-600">
                      Support: neonsolcreatives@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center mr-4 text-primary-600 flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 mb-1">Business Hours</h3>
                    <p className="text-secondary-600">
                      Monday: 9:00 AM – 6:00 PM<br />
                      Tuesday: 9:00 AM – 6:00 PM<br />
                      Wednesday: 9:00 AM – 6:00 PM<br />
                      Thursday: 9:00 AM – 6:00 PM<br />
                      Friday: 9:00 AM – 6:00 PM<br />
                      Saturday: 9:00 AM – 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/1AXbZzk6AU/" className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors">
                    {/* Facebook */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://x.com/NeonsolCreative" className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors">
                    {/* Twitter */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/neonsol_creatives?igsh=MWRtN2R4Znk2Z3V3NQ==" className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors">
                    {/* Instagram */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/neonsol-creatives" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors">
                    {/* LinkedIn */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.413v1.561h.049c.475-.898 1.637-1.847 3.372-1.847 3.603 0 4.268 2.369 4.268 5.455v6.283zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.144 0 2.07.926 2.07 2.07 0 1.142-.926 2.07-2.07 2.07zM6.863 20.452H3.813V9h3.05v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.278V1.723C24 .771 23.2 0 22.222 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 lg:pl-16">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      ref={nameRef}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      ref={emailRef}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    ref={subjectRef}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    ref={messageRef}
                    rows={5} 
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                    required
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
