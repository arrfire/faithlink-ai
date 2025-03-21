
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedGradient from './AnimatedGradient';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const scrollToContent = () => {
    const element = document.getElementById('scripture-insights');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <AnimatedGradient />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-scripture-accent/10 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-scripture-deep/10 rounded-full filter blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="inline-block px-4 py-1.5 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-scripture-accent/20 rounded-full text-sm font-medium text-scripture-accent mb-6">
              AI + Web3 + Biblical Wisdom
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6 transition-all duration-1000 delay-100 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Discover Scripture with <span className="text-gradient">AI-Powered</span> Insights
          </h1>
          
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-200 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Bibleverse merges AI and Web3 to revolutionize spiritual engagement with personalized study, rewards, and community-driven biblical discussions.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button size="lg" className="bg-scripture-deep hover:bg-scripture-deep/90 text-white">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-scripture-accent text-scripture-accent hover:bg-scripture-accent/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToContent}
          aria-label="Scroll to content"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm border border-white/20 text-scripture-deep dark:text-white transition-colors hover:bg-white/50"
        >
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
