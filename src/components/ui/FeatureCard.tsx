import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-terminal-lighter backdrop-blur-sm rounded-lg p-6 border border-terminal-lighter/50 hover:border-primary-500/30 transition-all duration-300"
    >
      <div className="p-3 bg-terminal-base/50 rounded-full w-fit mb-4 text-primary-500">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;