import React from 'react';
import { motion } from 'framer-motion';
import { Download, GitBranch, Terminal, Zap } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import CodeBlock from '../components/ui/CodeBlock';

const Installation: React.FC = () => {
  const installationSteps = [
    {
      title: "Clone the Repository",
      description: "Get the latest code from GitHub to your local machine",
      command: "git clone https://github.com/username/emma-assistant.git\ncd emma-assistant",
      icon: GitBranch
    },
    {
      title: "Setup Environment",
      description: "Create and activate a virtual environment, then install dependencies",
      command: "# Create virtual environment\npython -m venv venv\n\n# Activate virtual environment\n# On Windows\nvenv\\Scripts\\activate\n# On macOS/Linux\nsource venv/bin/activate\n\n# Install requirements\npip install -r requirements.txt",
      icon: Terminal
    },
    {
      title: "Configure API Keys",
      description: "Set up your API keys for weather and other services",
      command: "# Copy the example config file\ncp config.example.json config.json\n\n# Edit the config file with your API keys\n# Replace YOUR_API_KEY with actual keys\nvim config.json  # or use any text editor",
      icon: Zap
    },
    {
      title: "Run Emma",
      description: "Start Emma and begin using voice commands",
      command: "python main.py",
      icon: Download
    }
  ];

  const systemRequirements = [
    "Python 3.7 or higher",
    "Microphone for voice input",
    "Speakers for voice output",
    "Internet connection for API features",
    "50MB disk space"
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Installation Guide" 
          subtitle="Follow these steps to get Emma up and running on your system."
          align="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            {installationSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-terminal-lighter rounded-lg p-6 border border-terminal-lighter/40"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-terminal-base/50 rounded-full text-primary-500">
                    <step.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{step.description}</p>
                  </div>
                </div>
                <CodeBlock 
                  code={step.command}
                  language="bash"
                  showLineNumbers={true}
                />
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-terminal-lighter rounded-lg p-6 border border-terminal-lighter/40">
              <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
              <ul className="space-y-3">
                {systemRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span className="text-gray-400">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-terminal-lighter rounded-lg p-6 border border-terminal-lighter/40">
              <h3 className="text-xl font-semibold mb-4">Troubleshooting</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-primary-500 mb-1">Microphone not working?</h4>
                  <p className="text-sm text-gray-400">
                    Ensure your microphone is properly connected and has the necessary system permissions. 
                    Run the test script to verify: <code className="text-xs bg-terminal-base/50 px-1.5 py-0.5 rounded">python test_mic.py</code>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-primary-500 mb-1">API connection issues?</h4>
                  <p className="text-sm text-gray-400">
                    Check your internet connection and verify API keys are correctly 
                    entered in the configuration file.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-primary-500 mb-1">Missing dependencies?</h4>
                  <p className="text-sm text-gray-400">
                    Try reinstalling requirements with: <code className="text-xs bg-terminal-base/50 px-1.5 py-0.5 rounded">pip install -r requirements.txt --force-reinstall</code>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-terminal-lighter rounded-lg p-6 border border-terminal-lighter/40">
              <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-primary-500 hover:text-primary-400 flex items-center gap-2">
                    <Download size={16} />
                    <span>Download latest release</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-500 hover:text-primary-400 flex items-center gap-2">
                    <GitBranch size={16} />
                    <span>View source on GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-500 hover:text-primary-400 flex items-center gap-2">
                    <Terminal size={16} />
                    <span>API Documentation</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Installation;