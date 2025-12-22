import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { PROFILE } from '../constants';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending process
    setTimeout(() => {
      window.location.href = `mailto:${PROFILE.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 scroll-mt-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
       {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-900/50 to-transparent"></div>
      <div className="absolute -left-20 bottom-20 w-72 h-72 bg-blue-500/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Let's <span className="text-blue-600 dark:text-blue-500">Connect</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            I am currently available for a 4-to-6 month capstone internship. 
            Have a project in mind or just want to say hi?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info Card */}
          <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-lg dark:shadow-xl transition-colors">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href={`mailto:${PROFILE.email}`} className="flex items-start space-x-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                    <Mail className="text-blue-600 dark:text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-500">Email Me</p>
                    <p className="text-lg font-medium break-all">{PROFILE.email}</p>
                  </div>
                </a>

                <a href={`tel:${PROFILE.phone}`} className="flex items-start space-x-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                    <Phone className="text-blue-600 dark:text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-500">Call Me</p>
                    <p className="text-lg font-medium">{PROFILE.phone}</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 text-slate-600 dark:text-slate-300 group">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent">
                    <MapPin className="text-blue-600 dark:text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-500">Location</p>
                    <p className="text-lg font-medium">{PROFILE.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 text-slate-500 dark:text-slate-400">
                  <Linkedin size={20} />
                </a>
                <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent hover:bg-slate-800 hover:text-white dark:hover:bg-slate-700 transition-all duration-300 text-slate-500 dark:text-slate-400">
                  <Github size={20} />
                </a>
                <a href={PROFILE.links.portfolio} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent hover:bg-green-600 hover:text-white dark:hover:bg-green-600 transition-all duration-300 text-slate-500 dark:text-slate-400">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg dark:shadow-xl transition-colors">
             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
             {submitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-300">
                 <div className="w-16 h-16 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                   <CheckCircle className="text-green-600 dark:text-green-500" size={32} />
                 </div>
                 <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Prepared!</h4>
                 <p className="text-slate-600 dark:text-slate-400">Opening your email client to send the message...</p>
                 <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-sm font-medium"
                 >
                    Send another message
                 </button>
               </div>
             ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-400">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-400 dark:placeholder-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-400">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-400 dark:placeholder-slate-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-slate-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-400 dark:placeholder-slate-600 resize-none"
                    placeholder="Hello Youssef, I'd like to discuss a project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-500 active:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 dark:shadow-blue-900/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Preparing...' : 'Send Message'}
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;