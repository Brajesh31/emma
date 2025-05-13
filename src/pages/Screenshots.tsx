import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

const Screenshots: React.FC = () => {
  const screenshots = [
    {
      title: "Main Interface",
      description: "Emma's terminal interface showing the welcome message and available commands.",
      imageSrc: "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Weather Command",
      description: "Emma providing current weather information for the requested location.",
      imageSrc: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Task Management",
      description: "Using Emma to create, view, and manage your tasks from the command line.",
      imageSrc: "https://images.pexels.com/photos/4792497/pexels-photo-4792497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Email Functionality",
      description: "Composing and sending an email using voice commands through Emma.",
      imageSrc: "https://images.pexels.com/photos/5483070/pexels-photo-5483070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Screenshots & Demos" 
          subtitle="See Emma in action through these visual examples showing the CLI interface and key features."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-terminal-lighter rounded-lg overflow-hidden border border-terminal-lighter/40"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={screenshot.imageSrc} 
                  alt={screenshot.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
                <p className="text-gray-400 text-sm">{screenshot.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Demo Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Demo Video</h3>
          <div className="bg-terminal-lighter border border-terminal-lighter/40 rounded-lg p-6">
            <div className="aspect-video bg-terminal-base/70 rounded flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg mb-2">Demo video coming soon</p>
                <p className="text-sm text-gray-400">Watch Emma in action with voice commands and responses</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Interactive Demo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Interactive Demo</h3>
          <div className="bg-terminal-lighter border border-terminal-lighter/40 rounded-lg p-6">
            <div className="bg-terminal-base p-4 rounded-lg font-mono">
              <div className="flex items-center gap-2 mb-3 border-b border-terminal-lighter pb-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-terminal-error"></div>
                  <div className="w-3 h-3 rounded-full bg-terminal-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-terminal-success"></div>
                </div>
                <div className="text-xs text-gray-400">emma_demo</div>
              </div>
              
              <div className="text-sm space-y-2">
                <p className="text-primary-500">$ python main.py</p>
                <p className="text-terminal-success">Initializing Emma Personal Assistant v1.0...</p>
                <p className="text-terminal-success">Speech recognition engine loaded.</p>
                <p className="text-terminal-success">Text-to-speech engine loaded.</p>
                <p className="text-white">Hello! I'm Emma, your personal assistant. How can I help you today?</p>
                <p className="text-primary-500">$ What can you do?</p>
                <p className="text-white">I can help with various tasks, including:</p>
                <p className="text-white ml-4">- Weather forecasts</p>
                <p className="text-white ml-4">- Web searches</p>
                <p className="text-white ml-4">- Send emails</p>
                <p className="text-white ml-4">- Set reminders</p>
                <p className="text-white ml-4">- Answer questions</p>
                <p className="text-white ml-4">- Open applications</p>
                <p className="text-primary-500">$ What's the weather like today?</p>
                <p className="text-terminal-success">Checking weather for your location...</p>
                <p className="text-white">It's currently 72°F with clear skies in New York. Humidity is at 45% with a light breeze.</p>
                <p className="text-primary-500">$ <span className="animate-cursor-blink">_</span></p>
              </div>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">
              This is a simulated demo. Download and install Emma to experience the full functionality.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Screenshots;