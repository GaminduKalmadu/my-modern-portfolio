'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'gamindukalmadu8@gmail.com',
      link: 'mailto:gamindukalmadu8@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '0767955166',
      link: 'tel:0767955166',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Malabe, Sri Lanka',
      link: '#',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 mt-10 transition-colors duration-500 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 text-gray-900 dark:text-white">
            Get In Touch
          </h1>
          <p className="text-xl max-w-3xl mx-auto transition-colors duration-300 text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 transition-colors duration-300 text-gray-900 dark:text-white">
              Contact Information
            </h2>
            <p className="mb-8 leading-relaxed transition-colors duration-300 text-gray-600 dark:text-gray-400">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-4 rounded-lg transition-colors duration-200 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold transition-colors duration-300 text-gray-900 dark:text-white">
                        {info.title}
                      </h3>
                      <p className="transition-colors duration-300 text-gray-600 dark:text-gray-400">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-12 p-6 rounded-xl transition-colors duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900">
              <h3 className="font-bold mb-2 transition-colors duration-300 text-gray-900 dark:text-white">
                Response Time
              </h3>
              <p className="text-sm transition-colors duration-300 text-gray-600 dark:text-gray-400">
                I typically respond within 24-48 hours. For urgent inquiries,
                please call directly.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-xl shadow-lg transition-colors duration-300 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-6 transition-colors duration-300 text-gray-900 dark:text-white">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 transition-colors duration-300 text-gray-700 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white border-gray-300 text-gray-900 placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 transition-colors duration-300 text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white border-gray-300 text-gray-900 placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 transition-colors duration-300 text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white border-gray-300 text-gray-900 placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 transition-colors duration-300 text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none bg-white border-gray-300 text-gray-900 placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
