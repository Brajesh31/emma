import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Have questions about Emma? Want to contribute or report an issue? Reach out to us."
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-terminal-base border border-terminal-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-terminal-base border border-terminal-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-terminal-base border border-terminal-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-colors w-full md:w-auto
                  ${isSubmitting || submitted 
                    ? 'bg-primary-400 cursor-not-allowed' 
                    : 'bg-primary-500 hover:bg-primary-600'}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : submitted ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              
              <div className="bg-terminal-lighter border border-terminal-lighter/40 rounded-lg p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-terminal-base/70 rounded-full text-primary-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:contact@emma-assistant.com" 
                      className="text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      contact@emma-assistant.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-terminal-base/70 rounded-full text-primary-500">
                    <Github size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/username/emma-assistant" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      github.com/username/emma-assistant
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-terminal-base/70 rounded-full text-primary-500">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/username" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      linkedin.com/in/username
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-terminal-lighter border border-terminal-lighter/40 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">FAQ</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-primary-500 font-medium mb-1">How does Emma's voice recognition work?</h4>
                  <p className="text-sm text-gray-400">
                    Emma uses the SpeechRecognition library to capture audio from your microphone 
                    and convert it to text which is then processed by the command system.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-primary-500 font-medium mb-1">Can I add custom commands?</h4>
                  <p className="text-sm text-gray-400">
                    Yes! Emma is designed to be extensible. You can add custom commands by 
                    creating new modules in the modules directory and updating the commands.py file.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-primary-500 font-medium mb-1">Is my data secure?</h4>
                  <p className="text-sm text-gray-400">
                    Emma processes all commands locally on your machine. API keys and passwords 
                    are stored in a local config file and never transmitted.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;