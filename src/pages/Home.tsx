import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mic, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import TerminalAnimation from '../components/ui/TerminalAnimation';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';

const Home: React.FC = () => {
  // Sample terminal commands for the animation
  const commands = [
    'emma start',
    'emma what is the weather today?',
    'emma search "python tutorials"',
    'emma send email to john@example.com'
  ];
  
  const responses = [
    'Emma v1.0.0 initialized. How can I assist you today?',
    'Currently in New York: 72°F, Sunny with scattered clouds',
    'Searching for "python tutorials"...\nFound 15 results. Opening top 3 in your browser.',
    'Composing email to john@example.com...\nWhat would you like to include in the message?'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Your AI-powered command-line assistant
                <span className="text-primary-500 animate-cursor-blink">_</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-xl">
                Emma streamlines your daily tasks through voice and text commands,
                combining Python's power with AI capabilities for a hands-free experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/features" 
                  className="bg-primary-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-primary-600 transition-colors"
                >
                  Explore Features <ArrowRight size={18} />
                </Link>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-terminal-lighter bg-terminal-lighter/30 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-terminal-lighter transition-colors"
                >
                  <Github size={18} /> View on GitHub
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <TerminalAnimation 
                commands={commands}
                responses={responses}
                className="w-full shadow-xl shadow-primary-500/5"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quick Features Preview */}
      <section className="py-16 bg-terminal-lighter/30">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Core Features" 
            subtitle="Emma combines voice recognition, API connections, and automation to supercharge your productivity."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Mic}
              title="Voice Commands"
              description="Speak naturally to Emma through SpeechRecognition integration for a hands-free experience."
              delay={0.1}
            />
            <FeatureCard 
              icon={Terminal}
              title="CLI Interface"
              description="Lightweight, terminal-friendly design that works across systems without a heavy GUI."
              delay={0.2}
            />
            <FeatureCard 
              icon={Github}
              title="Open Source"
              description="Fully customizable codebase allowing developers to extend Emma's capabilities."
              delay={0.3}
            />
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/features" className="text-primary-500 hover:text-primary-400 flex items-center gap-2">
              View all features <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;