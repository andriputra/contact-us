import React from 'react';
import ContactUsForm, { FormData } from '../components/ContactUsForm';
import './styles/globals.css'

const ContactPage: React.FC = () => {
  const handleFormSubmit = (formData: FormData) => {
    // Proses data form atau kirim ke server
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <ContactUsForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ContactPage;
