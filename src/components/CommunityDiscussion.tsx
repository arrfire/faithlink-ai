
import { useState } from 'react';
import { MessageSquare, ThumbsUp, Share2, Users, Bookmark, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const CommunityDiscussion = () => {
  const [activeTab, setActiveTab] = useState('trending');
  
  const discussions = [
    {
      id: 1,
      title: "Understanding the Beatitudes in modern context",
      author: {
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=1",
        role: "Theologian"
      },
      excerpt: "I've been studying Matthew 5:3-12 and wondering how we might apply the concept of being 'poor in spirit' in today's achievement-focused society...",
      likes: 28,
      comments: 12,
      tags: ["Matthew", "Beatitudes", "Modern Application"],
      isVerified: true
    },
    {
      id: 2,
      title: "The meaning of 'living water' in John 4",
      author: {
        name: "David Chen",
        avatar: "https://i.pravatar.cc/150?img=4",
        role: "Pastor"
      },
      excerpt: "Jesus offers the Samaritan woman 'living water' in John 4:10. I'd love to discuss how this metaphor relates to other water imagery in Scripture...",
      likes: 35,
      comments: 18,
      tags: ["John", "Symbolism", "Jesus"],
      isVerified: true
    },
    {
      id: 3,
      title: "Paul's thorn in the flesh - what was it?",
      author: {
        name: "Michael Williams",
        avatar: "https://i.pravatar.cc/150?img=3",
        role: "Bible Scholar"
      },
      excerpt: "In 2 Corinthians 12:7-9, Paul mentions his 'thorn in the flesh.' What are some scholarly interpretations of what this might have been?",
      likes: 42,
      comments: 27,
      tags: ["Paul", "2 Corinthians", "Interpretation"],
      isVerified: false
    }
  ];
  
  const communities = [
    { name: "Biblical Hebrew Study", members: 1423 },
    { name: "Women in Scripture", members: 958 },
    { name: "Digital Theology", members: 762 },
    { name: "Ancient Near East Context", members: 605 }
  ];
  
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-white to-scripture-light/30 dark:from-scripture-deep/30 dark:to-black/60">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <span className="section-title-tag">Connect</span>
          <h2 className="section-title-main">Community Discussions</h2>
          <p className="section-subtitle">
            Join a vibrant community of believers engaging in thoughtful, AI-enhanced discussions about scripture.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="mb-6 border-b border-border">
              <div className="flex space-x-6">
                {['trending', 'recent', 'following'].map((tab) => (
                  <button
                    key={tab}
                    className={`pb-3 text-sm font-medium capitalize ${
                      activeTab === tab 
                        ? 'text-scripture-deep dark:text-white border-b-2 border-scripture-accent' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="glass-panel card-hover">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-3">
                        <img src={discussion.author.avatar} alt={discussion.author.name} />
                      </Avatar>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium text-sm">{discussion.author.name}</span>
                          {discussion.isVerified && (
                            <Badge variant="outline" className="ml-2 text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">{discussion.author.role}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-xl font-medium mb-2">{discussion.title}</h3>
                    <p className="text-muted-foreground mb-4">{discussion.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {discussion.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-scripture-accent/10 text-scripture-accent rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <button className="flex items-center text-xs text-muted-foreground hover:text-scripture-accent">
                          <ThumbsUp size={14} className="mr-1" />
                          <span>{discussion.likes}</span>
                        </button>
                        <button className="flex items-center text-xs text-muted-foreground hover:text-scripture-accent">
                          <MessageSquare size={14} className="mr-1" />
                          <span>{discussion.comments}</span>
                        </button>
                        <button className="flex items-center text-xs text-muted-foreground hover:text-scripture-accent">
                          <Share2 size={14} className="mr-1" />
                          <span>Share</span>
                        </button>
                      </div>
                      <button className="flex items-center text-xs font-medium text-scripture-accent hover:text-scripture-deep">
                        Read More <ChevronRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-scripture-deep hover:bg-scripture-deep/90 text-white">
                Explore All Discussions
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="glass-panel mb-6">
              <div className="p-6">
                <h3 className="font-serif text-lg font-medium mb-4">Start a Discussion</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your biblical insights, ask questions, or explore scripture with our supportive community.
                </p>
                <Button className="w-full bg-scripture-deep hover:bg-scripture-deep/90 text-white">
                  <MessageSquare size={16} className="mr-2" />
                  New Discussion
                </Button>
              </div>
            </div>
            
            <div className="glass-panel mb-6">
              <div className="p-6">
                <h3 className="font-serif text-lg font-medium mb-4">Popular Communities</h3>
                <div className="space-y-4">
                  {communities.map((community, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <div className="flex items-center">
                        <Users size={16} className="text-scripture-accent mr-2" />
                        <span className="font-medium text-sm">{community.name}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {community.members.toLocaleString()} members
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-scripture-accent text-scripture-accent hover:bg-scripture-accent/10">
                  Explore Communities
                </Button>
              </div>
            </div>
            
            <div className="glass-panel">
              <div className="p-6">
                <h3 className="font-serif text-lg font-medium mb-4">Saved Discussions</h3>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Bookmark size={40} className="text-muted stroke-[1.25px] mb-4" />
                  <h4 className="font-medium mb-2">No saved discussions yet</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Bookmark discussions to read later or reference in your study.
                  </p>
                  <Button variant="link" className="text-scripture-accent hover:text-scripture-deep">
                    Learn how bookmarking works
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityDiscussion;
