import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TechCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  delay?: number;
}

const TechCard: React.FC<TechCardProps> = ({
  icon: Icon,
  name,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-terminal-lighter rounded-lg p-5 border border-terminal-lighter/40 flex flex-col"
    >
      <div className="mb-3 text-primary-500">
        <Icon size={28} />
      </div>
      <h3 className="text-lg font-medium mb-2 font-mono">
        {name}
      </h3>
      <p className="text-sm text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default TechCard;