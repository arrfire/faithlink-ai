
import { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import VerseCard from './VerseCard';

const ScriptureInsights = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const verses = [
    {
      reference: "Proverbs 3:5-6",
      text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      insights: "This verse emphasizes complete reliance on divine guidance rather than human intellect. In today's context, it reminds us to balance data-driven decisions with spiritual discernment, acknowledging the limits of our understanding in an increasingly complex world."
    },
    {
      reference: "Philippians 4:6-7",
      text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
      insights: "This passage addresses anxiety management through spiritual practices. Modern psychology confirms the benefits of gratitude and mindfulness, similar to the thanksgiving and prayer mentioned here, for reducing stress and improving mental health."
    },
    {
      reference: "Romans 12:2",
      text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is—his good, pleasing and perfect will.",
      insights: "This verse speaks to cognitive transformation and the development of discernment. It parallels modern concepts of critical thinking and mindset shifts, suggesting that spiritual growth involves active mental engagement rather than passive acceptance."
    }
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real app, this would trigger an API call
  };
  
  return (
    <section id="scripture-insights" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <span className="section-title-tag">AI-Powered</span>
          <h2 className="section-title-main">Scripture Insights Engine</h2>
          <p className="section-subtitle">
            Our AI system identifies connections between verses and modern contexts, helping you discover deeper meaning in the Bible.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search for a verse or topic..."
              className="pl-12 py-6 text-base bg-white dark:bg-black/20 border border-border rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-scripture-deep hover:bg-scripture-deep/90"
            >
              <Sparkles size={18} className="mr-2" />
              Generate Insights
            </Button>
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verses.map((verse, index) => (
            <VerseCard
              key={verse.reference}
              reference={verse.reference}
              text={verse.text}
              insights={verse.insights}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScriptureInsights;
