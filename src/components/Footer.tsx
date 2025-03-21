
import { Heart, Mail, Twitter, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed to newsletter");
    // In a real app, this would submit to an API
  };
  
  return (
    <footer className="bg-white dark:bg-black border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="/" className="text-2xl font-serif font-medium text-scripture-deep dark:text-white inline-block mb-4">
              Bibleverse<span className="text-scripture-accent">.</span>
            </a>
            <p className="text-muted-foreground mb-6">
              Merging AI and Web3 to revolutionize spiritual engagement with personalized Bible study experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-colors hover:bg-scripture-accent/10 hover:text-scripture-accent"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-colors hover:bg-scripture-accent/10 hover:text-scripture-accent"
                aria-label="Github"
              >
                <Github size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-colors hover:bg-scripture-accent/10 hover:text-scripture-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="mailto:info@bibleverse.com" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-colors hover:bg-scripture-accent/10 hover:text-scripture-accent"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Features</h3>
            <ul className="space-y-3">
              {["Scripture Insights", "Study Recommendations", "Read to Earn", "Community", "AI Tools"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-scripture-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "API", "Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-scripture-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Join our newsletter to receive updates and spiritual insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-muted/30 border-border"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-scripture-deep hover:bg-scripture-deep/90 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bibleverse. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-sm text-muted-foreground">Made with</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span className="text-sm text-muted-foreground">and AI-assisted scripture insights</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
