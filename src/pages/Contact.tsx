import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';

const Contact: React.FC = () => {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700">
              Have questions about our training programs or interested in partnering with us? 
              Get in touch with our team and we'll be happy to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Our Location</h2>
          <ContactMap />
        </div>
      </section>
    </>
  );
};

export default Contact;