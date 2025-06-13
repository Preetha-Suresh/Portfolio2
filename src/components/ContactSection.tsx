import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_g3j0abt', // Your EmailJS service ID
        'template_hpsjkwp', // Your EmailJS template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message
        },
        'Fs1GIPF-ruInJpEsC' // Your EmailJS public key
      );

      console.log('Email successfully sent!', result.text);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Email sending error:', error);
      setIsSubmitting(false);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', color: 'from-red-400 to-red-600', bgColor: 'bg-red-500', url: 'mailto:preethapslv@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-500', url: 'https://www.linkedin.com/in/preethasuresh206/' },
    { icon: Github, label: 'GitHub', color: 'from-gray-400 to-gray-600', bgColor: 'bg-gray-500', url: 'https://github.com/Preetha-Suresh' },
    { icon: Instagram, label: 'Instagram', color: 'from-pink-400 to-purple-600', bgColor: 'bg-pink-500', url: 'https://www.instagram.com/preetha.sh_206/' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8">Send a Message</h3>
            <div className="relative">
              <div className="relative z-10 p-8 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      placeholder="Let's Connect!"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </span>
                  </button>
                </form>

                {/* Success Message */}
                {submitted && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-800/90 rounded-2xl backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <span className="text-2xl">✓</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-300">Thanks for reaching out. I'll get back to you soon!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Connect With Me */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {socialLinks.map(({ icon: Icon, label, bgColor, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className={`w-12 h-12 ${bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{label}</p>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for work</span>
              </div>
              <p className="text-slate-400 text-sm">Open to new opportunities and exciting projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
