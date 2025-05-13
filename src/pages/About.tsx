import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Terminal, Zap } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Emma"
          subtitle="A smart, Python-based personal assistant designed to streamline everyday digital tasks."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Why Emma?</h3>
            <p className="text-gray-400 mb-6">
              Emma was created to simplify complex daily tasks through the power of voice commands
              and Python automation. As digital tools multiply, the need for a centralized,
              voice-controlled assistant becomes increasingly important.
            </p>
            <p className="text-gray-400">
              Named after the pioneering computer scientist Emma Hoover, this project aims to
              make technology more accessible and efficient for everyday users while demonstrating
              practical applications of speech recognition and natural language processing.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-terminal-lighter p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="text-primary-500" size={20} />
                  <h4 className="font-medium">CLI-Based</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Works in your terminal, with minimal resource usage.
                </p>
              </div>
              
              <div className="bg-terminal-lighter p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-primary-500" size={20} />
                  <h4 className="font-medium">Fast Response</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Lightweight design ensures quick command execution.
                </p>
              </div>
              
              <div className="bg-terminal-lighter p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="text-primary-500" size={20} />
                  <h4 className="font-medium">AI-Powered</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Uses natural language processing for understanding commands.
                </p>
              </div>
              
              <div className="bg-terminal-lighter p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="text-primary-500" size={20} />
                  <h4 className="font-medium">Cross-Platform</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Runs on Windows, macOS, and Linux systems.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Project Timeline</h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-terminal-lighter">
              <div className="relative pl-8">
                <span className="absolute left-0 flex items-center justify-center w-10 h-10 bg-terminal-lighter rounded-full text-primary-500">
                  1
                </span>
                <h4 className="text-xl font-semibold mb-1">Initial Concept</h4>
                <p className="text-gray-400 text-sm">
                  Emma began as a simple script to automate repetitive command-line tasks,
                  gradually evolving into a full-fledged voice-activated assistant.
                </p>
              </div>
              
              <div className="relative pl-8">
                <span className="absolute left-0 flex items-center justify-center w-10 h-10 bg-terminal-lighter rounded-full text-primary-500">
                  2
                </span>
                <h4 className="text-xl font-semibold mb-1">Voice Integration</h4>
                <p className="text-gray-400 text-sm">
                  Integration of SpeechRecognition and pyttsx3 allowed Emma to listen and respond,
                  creating a two-way communication channel between user and machine.
                </p>
              </div>
              
              <div className="relative pl-8">
                <span className="absolute left-0 flex items-center justify-center w-10 h-10 bg-terminal-lighter rounded-full text-primary-500">
                  3
                </span>
                <h4 className="text-xl font-semibold mb-1">API Connections</h4>
                <p className="text-gray-400 text-sm">
                  Adding weather, news, and Wikipedia API connections expanded Emma's knowledge base
                  and practical applications for everyday use.
                </p>
              </div>
              
              <div className="relative pl-8">
                <span className="absolute left-0 flex items-center justify-center w-10 h-10 bg-terminal-lighter rounded-full text-primary-500">
                  4
                </span>
                <h4 className="text-xl font-semibold mb-1">Open Source Release</h4>
                <p className="text-gray-400 text-sm">
                  Emma is now available as an open-source project, welcoming contributions
                  from developers around the world to enhance its capabilities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;