import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  showLineNumbers = true,
  className = '',
}) => {
  const [copied, setCopied] = React.useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute right-2 top-2 z-10">
        <button 
          onClick={handleCopy}
          className="bg-terminal-lighter/50 hover:bg-terminal-lighter p-1.5 rounded-md text-gray-400 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          <Copy size={16} />
        </button>
      </div>
      
      {copied && (
        <div className="absolute top-2 right-10 bg-primary-500 text-white text-xs px-2 py-1 rounded">
          Copied!
        </div>
      )}
      
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
        }}
        codeTagProps={{
          className: 'font-mono',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;