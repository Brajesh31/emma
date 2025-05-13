import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TerminalAnimationProps {
  commands: string[];
  responses: string[];
  loop?: boolean;
  className?: string;
}

const TerminalAnimation: React.FC<TerminalAnimationProps> = ({
  commands,
  responses,
  loop = true,
  className = '',
}) => {
  const [sequence, setSequence] = useState<(string | number)[]>([]);

  useEffect(() => {
    const newSequence: (string | number)[] = [];
    
    for (let i = 0; i < commands.length; i++) {
      // Add prompt
      newSequence.push(`$ ${commands[i]}`);
      // Pause after prompt
      newSequence.push(1000);
      
      // Add response if available
      if (responses[i]) {
        newSequence.push(`$ ${commands[i]}\n${responses[i]}`);
        // Longer pause after response
        newSequence.push(2000);
      }
    }
    
    setSequence(newSequence);
  }, [commands, responses]);

  return (
    <div className={`bg-terminal-base border border-terminal-lighter rounded-md p-4 font-mono text-sm ${className}`}>
      <div className="flex items-center gap-2 mb-3 border-b border-terminal-lighter pb-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-terminal-error"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-warning"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-success"></div>
        </div>
        <div className="text-xs text-gray-400">emma_terminal</div>
      </div>
      
      {sequence.length > 0 ? (
        <TypeAnimation
          sequence={sequence}
          wrapper="pre"
          cursor={true}
          repeat={loop ? Infinity : 0}
          className="whitespace-pre-wrap break-words text-terminal-text"
          style={{ display: 'block', minHeight: '4rem' }}
        />
      ) : (
        <div className="animate-pulse">Loading terminal...</div>
      )}
    </div>
  );
};

export default TerminalAnimation;