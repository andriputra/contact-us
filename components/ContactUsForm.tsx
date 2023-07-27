import React, { useState , useEffect } from 'react';
import contactUsData from '../data/contactUsData.json';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactUsFormProps {
  onSubmit: (data: FormData) => void;
}

const ContactUsForm: React.FC<ContactUsFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    // Set data awal dari JSON sebagai nilai awal state untuk formulir
    setFormData(contactUsData);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-semibold">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUsForm;
