
import { BookOpen, ChevronRight, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StudyCardProps {
  title: string;
  description: string;
  duration: string;
  topics: string[];
  favoriteCount: number;
  image: string;
  index: number;
}

const StudyCard: React.FC<StudyCardProps> = ({
  title,
  description,
  duration,
  topics,
  favoriteCount,
  image,
  index
}) => {
  return (
    <div 
      className="glass-panel card-hover overflow-hidden animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div 
        className="h-40 bg-cover bg-center blur-load" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
          onLoad={(e) => e.currentTarget.parentElement?.classList.add('loaded')}
        />
      </div>
      <div className="p-6">
        <div className="flex gap-2 flex-wrap mb-3">
          {topics.map((topic, i) => (
            <span 
              key={i} 
              className="text-xs bg-scripture-accent/10 text-scripture-accent px-2 py-1 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-xl font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock size={14} className="mr-1" />
            <span>{duration}</span>
            <Heart size={14} className="ml-3 mr-1 text-scripture-accent" />
            <span>{favoriteCount}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-scripture-accent hover:text-scripture-deep hover:bg-scripture-accent/10"
          >
            Begin Study <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const StudyRecommendations = () => {
  const recommendations = [
    {
      title: "The Beatitudes for Modern Life",
      description: "Explore how Jesus' teachings on blessedness apply to our contemporary challenges.",
      duration: "5 days",
      topics: ["New Testament", "Jesus", "Ethics"],
      favoriteCount: 248,
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Wisdom from Proverbs",
      description: "Practical wisdom from the book of Proverbs for decision-making and daily living.",
      duration: "7 days",
      topics: ["Old Testament", "Wisdom", "Practical"],
      favoriteCount: 312,
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Paul's Journey in Acts",
      description: "Follow Paul's missionary journeys and discover lessons for leadership and evangelism.",
      duration: "10 days",
      topics: ["New Testament", "Paul", "Missions"],
      favoriteCount: 186,
      image: "https://images.unsplash.com/photo-1519682973532-97b2b2fed05d?q=80&w=500&auto=format&fit=crop"
    }
  ];
  
  return (
    <section id="study-recommendations" className="py-20 bg-scripture-light/30 dark:bg-scripture-deep/10 relative">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/80 to-transparent dark:from-black/50 dark:to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="section-title">
          <span className="section-title-tag">Personalized</span>
          <h2 className="section-title-main">Study Recommendations</h2>
          <p className="section-subtitle">
            Receive personalized Bible study recommendations based on your interests, reading history, and spiritual journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <StudyCard
              key={rec.title}
              title={rec.title}
              description={rec.description}
              duration={rec.duration}
              topics={rec.topics}
              favoriteCount={rec.favoriteCount}
              image={rec.image}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-scripture-deep hover:bg-scripture-deep/90 text-white">
            Explore More Studies <BookOpen size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudyRecommendations;
