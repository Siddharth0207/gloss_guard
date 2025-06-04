import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin } from 'lucide-react'; // Example icons

interface FormData {
  name: string;
  email: string;
  message: string;
  service?: string; // Optional: for specific inquiries
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    service: 'General Inquiry',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined })); // Clear error on change
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you'd send this to a backend.
      // For this project, we'll use a mailto link.
      const subject = `Inquiry from ${formData.name} - ${formData.service}`;
      const body = `Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Message:
${formData.message}`;
      window.location.href = `mailto:contact@carcareco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setIsSubmitted(true);
      // Optionally reset form: setFormData({ name: '', email: '', message: '', service: 'General Inquiry' });
    }
  };

  const handleBookCall = () => {
    const subject = "Call Booking Request from Website";
    const body = "Hello CarCare Co. team,

I would like to book a call to discuss your products/services.

Please contact me at: [Your Phone Number Here]
Preferred time: [Your Preferred Time Here]

Thanks!";
    window.location.href = `mailto:sales@carcareco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        {isSubmitted ? (
          <motion.div
            className="text-center p-8 bg-green-600 rounded-lg shadow-xl max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1}}
          >
            <h3 className="text-2xl font-semibold mb-3">Thank You!</h3>
            <p>Your inquiry has been prepared for sending. Please check your email client.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 bg-white text-green-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Send Another Inquiry
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="max-w-3xl mx-auto bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={handleSubmitInquiry} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}
                       className={`w-full p-3 bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-md focus:ring-blue-500 focus:border-blue-500 transition`} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}
                       className={`w-full p-3 bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-md focus:ring-blue-500 focus:border-blue-500 transition`} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Service of Interest</label>
                <select name="service" id="service" value={formData.service} onChange={handleChange}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition">
                  <option>General Inquiry</option>
                  <option>Product Question</option>
                  <option>Detailing Services</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange}
                          className={`w-full p-3 bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-md focus:ring-blue-500 focus:border-blue-500 transition`}></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              <div className="text-center">
                <button type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Send Inquiry
                </button>
              </div>
            </form>
            <div className="mt-10 text-center border-t border-gray-700 pt-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-100">Prefer to Talk?</h3>
              <p className="text-gray-400 mb-4">Schedule a call with our sales team to discuss your needs.</p>
              <button onClick={handleBookCall}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Book a Call via Email
              </button>
            </div>
          </motion.div>
        )}

        {/* Optional: Contact Details & Map
        <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-100 mb-6">Our Office</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                    <Mail size={30} className="text-blue-400 mb-2" />
                    <h4 className="font-semibold">Email Us</h4>
                    <a href="mailto:info@carcareco.com" className="text-blue-400 hover:underline">info@carcareco.com</a>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                    <Phone size={30} className="text-blue-400 mb-2" />
                    <h4 className="font-semibold">Call Us</h4>
                    <a href="tel:+1234567890" className="text-blue-400 hover:underline">(123) 456-7890</a>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                    <MapPin size={30} className="text-blue-400 mb-2" />
                    <h4 className="font-semibold">Find Us</h4>
                    <p className="text-gray-300">123 Auto Street, Car City, CC 54321</p>
                </div>
            </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Contact;
