import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.835076510131!2d77.30100797534611!3d28.544266875566534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6c217529fbf%3A0x9f9df4e2df8d9e0e!2sShaheen%20Bagh%2C%20Jamia%20Nagar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      />
    </div>
  );
};

export default ContactMap;