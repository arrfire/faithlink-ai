
import { useState, useEffect } from 'react';
import { ChevronRight, BookOpen } from 'lucide-react';

interface VerseCardProps {
  reference: string;
  text: string;
  translation?: string;
  insights?: string;
  className?: string;
  delay?: number;
}

const VerseCard: React.FC<VerseCardProps> = ({ 
  reference, 
  text, 
  translation = "NIV", 
  insights,
  className = "",
  delay = 0
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`glass-panel card-hover overflow-hidden transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <div className="flex items-start p-6">
        <div className="mr-4 mt-1">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-scripture-accent/10">
            <BookOpen size={16} className="text-scripture-accent" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-serif text-lg font-medium mb-1">{reference}</h3>
            <span className="text-xs text-muted-foreground">{translation}</span>
          </div>
          <p className="scripture-quote mb-4">{text}</p>
          
          {insights && (
            <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-64' : 'max-h-0'}`}>
              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-medium mb-2">AI Insights</h4>
                <p className="text-sm text-muted-foreground">{insights}</p>
              </div>
            </div>
          )}
          
          {insights && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-xs font-medium text-scripture-accent mt-2 hover:text-scripture-deep dark:hover:text-scripture-light transition-colors"
            >
              {expanded ? 'Hide insights' : 'Show insights'}
              <ChevronRight size={14} className={`ml-1 transition-transform ${expanded ? 'rotate-90' : ''}`} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerseCard;
