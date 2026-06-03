'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      value: 'gamindukalmadu8@gmail.com',
      link: 'mailto:gamindukalmadu8@gmail.com',
      accent: 'border-primary/20 hover:border-primary/50',
      iconColor: 'text-primary bg-primary/10'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      value: '0767955166',
      link: 'tel:0767955166',
      accent: 'border-secondary/20 hover:border-secondary/50',
      iconColor: 'text-secondary bg-secondary/10'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Malabe, Sri Lanka',
      link: '#',
      accent: 'border-primary/20 hover:border-primary/50',
      iconColor: 'text-primary bg-primary/10'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRecipient = 'gamindukalmadu8@gmail.com';
    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Hi Gamindu,\n\n` +
      `You received a new inquiry from your portfolio website.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    const mailtoUrl = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
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
    <div className="min-h-screen pt-24 pb-16 mt-10 transition-colors duration-500 bg-white dark:bg-gray-950 relative">
      {/* Background Neon Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/5 dark:bg-primary/3 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-secondary/5 dark:bg-secondary/3 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20 dark:text-primary-light text-xs font-bold uppercase tracking-wider">
            Let's Connect
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Have an idea, project, or internship inquiry? Let's cooperate to construct something remarkable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                I am always interested in discussing software engineering challenges, open source collaborations, or new freelance work opportunities. Fill out the form or reach out directly!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className={`flex items-center space-x-4 p-5 rounded-2xl border bg-gray-50/50 hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900 transition-all duration-300 shadow-sm hover:shadow-md ${info.accent}`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${info.iconColor}`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                        {info.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/10 to-transparent dark:from-secondary/5 dark:to-transparent">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-secondary" />
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  Typical Response Time
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                I monitor my inbox daily and will get back to you within 24 hours. For direct inquiries, feel free to call.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 p-8 rounded-2xl border border-gray-150 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 px-4 space-y-6 flex flex-col items-center"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 animate-pulse"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/15 flex items-center justify-center text-primary dark:text-secondary-light border border-primary/20 dark:border-secondary/30">
                    <Sparkles size={36} className="animate-pulse" />
                  </div>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                  Email Draft Prepared!
                </h2>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md leading-relaxed font-medium">
                  I have pre-filled your message details into your default email client. Please review and click <strong className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Send</strong> in your mail application to complete the delivery!
                </p>

                <div className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-950/60 border border-gray-150 dark:border-gray-800/80 text-left text-xs font-mono text-gray-600 dark:text-gray-400 space-y-2">
                  <div><span className="text-primary font-bold">To:</span> gamindukalmadu8@gmail.com</div>
                  <div><span className="text-secondary font-bold">Subject:</span> [Portfolio Inquiry] {formData.subject}</div>
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-800 line-clamp-3">
                    <span className="font-sans text-xs italic">{formData.message}</span>
                  </div>
                </div>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const emailRecipient = 'gamindukalmadu8@gmail.com';
                      const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
                      const emailBody = encodeURIComponent(
                        `Hi Gamindu,\n\n` +
                        `You received a new inquiry from your portfolio website.\n\n` +
                        `Name: ${formData.name}\n` +
                        `Email: ${formData.email}\n\n` +
                        `Message:\n${formData.message}\n\n` +
                        `Best regards,\n${formData.name}`
                      );
                      window.location.href = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`;
                    }}
                    className="px-6 py-3 font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl transition-all duration-300"
                  >
                    Open Mail Again
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-3 font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-xl shadow-md hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
                  Send Me a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
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
                        className="w-full px-4 py-3.5 border rounded-xl outline-none transition-all duration-300 bg-gray-50/50 border-gray-250 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary dark:bg-gray-950 dark:border-gray-800 dark:text-white dark:placeholder-gray-600 dark:focus:bg-gray-900 dark:focus:border-secondary dark:focus:ring-secondary"
                        placeholder="Gamindu Kalmadu"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
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
                        className="w-full px-4 py-3.5 border rounded-xl outline-none transition-all duration-300 bg-gray-50/50 border-gray-250 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary dark:bg-gray-950 dark:border-gray-800 dark:text-white dark:placeholder-gray-600 dark:focus:bg-gray-900 dark:focus:border-secondary dark:focus:ring-secondary"
                        placeholder="gamindu@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
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
                      className="w-full px-4 py-3.5 border rounded-xl outline-none transition-all duration-300 bg-gray-50/50 border-gray-250 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary dark:bg-gray-950 dark:border-gray-800 dark:text-white dark:placeholder-gray-600 dark:focus:bg-gray-900 dark:focus:border-secondary dark:focus:ring-secondary"
                      placeholder="Project Inquiry / Job Placement"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 border rounded-xl outline-none transition-all duration-300 resize-none bg-gray-50/50 border-gray-250 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary dark:bg-gray-950 dark:border-gray-800 dark:text-white dark:placeholder-gray-600 dark:focus:bg-gray-900 dark:focus:border-secondary dark:focus:ring-secondary"
                      placeholder="Describe your project, timeline, or requirements..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300"
                  >
                    <Send size={18} className="mr-2" />
                    Submit Inquiry
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
