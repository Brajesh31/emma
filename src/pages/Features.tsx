import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  VolumeX, 
  Search, 
  Mail, 
  Calendar, 
  Cloud, 
  Code, 
  Settings
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: "Voice Commands",
      description: "Use natural speech for hands-free interaction through SpeechRecognition integration."
    },
    {
      icon: VolumeX,
      title: "Speech Output",
      description: "Hear responses through pyttsx3 text-to-speech synthesis engine with customizable voices."
    },
    {
      icon: Search,
      title: "Web & Wikipedia Search",
      description: "Find information quickly with integrated search and Wikipedia summary capabilities."
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Compose and send emails using voice commands without touching your keyboard."
    },
    {
      icon: Calendar,
      title: "Task Management",
      description: "Create, track and complete tasks with simple voice instructions."
    },
    {
      icon: Cloud,
      title: "Weather Updates",
      description: "Get current conditions and forecasts for any location using OpenWeatherMap API."
    },
    {
      icon: Code,
      title: "Customizable Commands",
      description: "Add your own voice commands and automation scripts to extend functionality."
    },
    {
      icon: Settings,
      title: "System Controls",
      description: "Open applications, manage files, and control system functions with voice."
    }
  ];
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Features & Capabilities" 
          subtitle="Emma combines powerful voice recognition with practical utility to make everyday tasks easier."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Detailed Feature Highlights */}
        <div className="space-y-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Voice Interaction System</h3>
              <p className="text-gray-400 mb-4">
                Emma's voice system creates a natural two-way conversation with your computer, 
                allowing you to speak commands and hear responses - all without touching a keyboard.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Multiple voice options with adjustable speech rate and pitch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Wake word detection to activate listening mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Natural language processing to understand intent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Contextual responses based on previous interactions</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-terminal-lighter rounded-lg p-6 border border-terminal-lighter/40">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-terminal-lighter/40">
                <Mic className="text-primary-500" size={24} />
                <h4 className="text-xl font-semibold">Voice Recognition Demo</h4>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="bg-terminal-base p-3 rounded">
                  <span className="text-terminal-text">$ emma what's the weather like today?</span>
                </div>
                <div className="bg-terminal-base p-3 rounded">
                  <span className="text-terminal-success">Checking weather for New York City...</span>
                </div>
                <div className="bg-terminal-base p-3 rounded">
                  <span className="text-terminal-text">It's currently 72°F with partly cloudy skies. 
                  Humidity is at 65% with a light 5mph wind from the northeast.</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row-reverse items-center gap-10"
          >
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">API Integrations</h3>
              <p className="text-gray-400 mb-4">
                Emma connects to various online services to bring you real-time information and
                expanded functionality beyond what's available on your local system.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Weather forecasts using OpenWeatherMap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>News headlines from multiple sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Wikipedia for quick knowledge lookups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Email services through SMTP integration</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-terminal-lighter rounded-lg p-6 border border-terminal-lighter/40">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-terminal-lighter/40">
                <Search className="text-primary-500" size={24} />
                <h4 className="text-xl font-semibold">Knowledge Lookup Demo</h4>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="bg-terminal-base p-3 rounded">
                  <span className="text-terminal-text">$ emma tell me about Python programming</span>
                </div>
                <div className="bg-terminal-base p-3 rounded">
                  <span className="text-terminal-success">Searching Wikipedia...</span>
                </div>
                <div className="bg-terminal-base p-3 rounded">
                  <span className="text-terminal-text">Python is an interpreted, high-level, general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant whitespace. Python is dynamically-typed and garbage-collected.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;