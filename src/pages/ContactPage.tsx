import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary-950 to-secondary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Get in <span className="text-primary-600">Touch</span>
            </h1>
            <p className="text-secondary-200 text-xl mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
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
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 mb-1">Office Location</h3>
                    <p className="text-secondary-600">
                      100 Technology Parkway<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center mr-4 text-primary-600 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 mb-1">Phone</h3>
                    <p className="text-secondary-600">
                      Main: (123) 456-7890<br />
                      Support: (123) 456-7891
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
                      Info: info@neonsolcreatives.com<br />
                      Support: support@neonsolcreatives.com
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
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-secondary-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 lg:pl-16">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Our Location</h2>
            <p className="text-secondary-600">
              Visit our office or contact us through our communication channels.
            </p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-medium">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.08442850508!2d-122.43388417078821!3d37.773519921507266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b40a2411%3A0x7cc47c6fae9538d3!2sFinancial%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1658175864789!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Neonsol Creatives Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-secondary-900 mb-2">What information should I provide when contacting you about a project?</h3>
                <p className="text-secondary-600">
                  When reaching out about a potential project, it's helpful to include details about your business, project goals, timeline, budget considerations, and any specific requirements. The more information you provide, the better we can understand your needs.
                </p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-secondary-900 mb-2">How long does it take to get a response?</h3>
                <p className="text-secondary-600">
                  We typically respond to all inquiries within 24 business hours. For complex project requests, we may schedule a follow-up call to discuss details further.
                </p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-secondary-900 mb-2">Do you work with clients remotely?</h3>
                <p className="text-secondary-600">
                  Yes, we work with clients worldwide. Our team is experienced in remote collaboration and has established processes to ensure effective communication and project management regardless of location.
                </p>
              </div>
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-secondary-900 mb-2">What happens after I submit my inquiry?</h3>
                <p className="text-secondary-600">
                  After receiving your inquiry, our team will review the information provided and respond with initial thoughts or questions. If the project seems like a good fit, we'll schedule a consultation to discuss your needs in detail and outline potential next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;