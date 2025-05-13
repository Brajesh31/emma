import React from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  Mic, 
  Speaker, 
  Calendar, 
  Thermometer, 
  Mail, 
  Database,
  FileJson
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import TechCard from '../components/ui/TechCard';

const TechStack: React.FC = () => {
  const technologies = [
    {
      icon: Book,
      name: "Python 3.x",
      description: "Core programming language powering Emma's functionality with its robust standard library."
    },
    {
      icon: Mic,
      name: "SpeechRecognition",
      description: "Library that enables voice command processing through various speech recognition engines."
    },
    {
      icon: Speaker,
      name: "pyttsx3",
      description: "Text-to-speech conversion library providing voice feedback to user commands."
    },
    {
      icon: Calendar,
      name: "datetime",
      description: "Standard library for handling dates, times, and related calculations."
    },
    {
      icon: Thermometer,
      name: "OpenWeatherMap API",
      description: "External service for retrieving current weather conditions and forecasts."
    },
    {
      icon: Book,
      name: "Wikipedia API",
      description: "Access to Wikipedia's vast knowledge base for information retrieval."
    },
    {
      icon: Mail,
      name: "smtplib",
      description: "Simple Mail Transfer Protocol library for sending emails from Python."
    },
    {
      icon: FileJson,
      name: "JSON/YAML",
      description: "Data storage formats for configuration and user preferences."
    },
    {
      icon: Database,
      name: "sqlite3",
      description: "Lightweight database for storing user data, history, and preferences."
    }
  ];
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Tech Stack" 
          subtitle="Emma is built with a powerful combination of Python libraries and APIs that enable its voice recognition and automation capabilities."
          align="center"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
              description={tech.description}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-terminal-lighter border border-terminal-lighter/40 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6">System Architecture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-terminal-base/50 p-5 rounded-lg border border-terminal-lighter/30">
              <h4 className="text-lg font-semibold mb-3 text-primary-500">Input Processing</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>SpeechRecognition for voice input</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>Text input fallback option</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>Natural language processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>Command pattern matching</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-terminal-base/50 p-5 rounded-lg border border-terminal-lighter/30">
              <h4 className="text-lg font-semibold mb-3 text-primary-500">Core Processing</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>Command routing system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>Module management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>API integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>Task execution engine</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-terminal-base/50 p-5 rounded-lg border border-terminal-lighter/30">
              <h4 className="text-lg font-semibold mb-3 text-primary-500">Output Systems</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>pyttsx3 voice synthesis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>Terminal text output</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>System automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-0.5">•</span>
                  <span>External actions (email, etc.)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-3">Folder Structure</h4>
            <pre className="bg-terminal-base p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-gray-300 font-mono">
{`emma-assistant/
├── main.py                # Entry point
├── modules/
│   ├── speak.py           # pyttsx3-based TTS engine
│   ├── listen.py          # Handles speech input
│   ├── commands.py        # Maps voice/text to actions
│   ├── weather.py         # Fetch weather from API
│   ├── wikipedia_fetch.py # Wikipedia API fetcher
│   └── email_sender.py    # SMTP mail module
│
├── utils/
│   ├── logger.py          # Logs activity
│   └── config.json        # API keys & preferences
│
├── requirements.txt       # All Python dependencies
└── README.md              # Documentation`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;