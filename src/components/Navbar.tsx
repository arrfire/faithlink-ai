
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/80 dark:bg-black/50 backdrop-blur-lg shadow-sm' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-serif font-medium text-scripture-deep dark:text-white">
          Bibleverse<span className="text-scripture-accent">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#scripture-insights" className="text-sm font-medium hover:text-scripture-accent transition-colors">
            Scripture Insights
          </a>
          <a href="#study-recommendations" className="text-sm font-medium hover:text-scripture-accent transition-colors">
            Study Recommendations
          </a>
          <a href="#read-to-earn" className="text-sm font-medium hover:text-scripture-accent transition-colors">
            Read to Earn
          </a>
          <a href="#community" className="text-sm font-medium hover:text-scripture-accent transition-colors">
            Community
          </a>
          <Button className="bg-scripture-deep text-white hover:bg-scripture-deep/90 transition-colors">
            Connect Wallet
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black/90 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#scripture-insights" 
              className="text-base py-2 font-medium hover:text-scripture-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Scripture Insights
            </a>
            <a 
              href="#study-recommendations" 
              className="text-base py-2 font-medium hover:text-scripture-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Study Recommendations
            </a>
            <a 
              href="#read-to-earn" 
              className="text-base py-2 font-medium hover:text-scripture-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Read to Earn
            </a>
            <a 
              href="#community" 
              className="text-base py-2 font-medium hover:text-scripture-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <Button className="bg-scripture-deep text-white hover:bg-scripture-deep/90 w-full transition-colors">
              Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
