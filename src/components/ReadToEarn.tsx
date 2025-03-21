
import { Sparkles, Book, Ticket, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const ReadToEarn = () => {
  return (
    <section id="read-to-earn" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?q=80&w=1080&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="section-title-tag inline-block mb-4">Web3 Rewards</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Read Scripture <span className="relative inline-block">
                <span className="text-scripture-accent">Earn Rewards</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="#C9AB72" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Our innovative Read-to-Earn system rewards your consistent engagement with scripture. Complete daily readings, participate in discussions, and earn tokens that can be redeemed for digital resources, donations to ministry causes, or exclusive community features.
            </p>
            
            <div className="flex flex-col space-y-6 mb-8">
              <div className="glass-panel p-5">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <Book size={18} className="text-scripture-accent mr-2" />
                    <h3 className="font-medium">Daily Reading</h3>
                  </div>
                  <span className="text-xs font-medium text-scripture-accent bg-scripture-accent/10 px-2 py-1 rounded-full">5 TOKENS</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Complete today's reading plan</p>
                <Progress value={75} className="h-2 bg-muted" />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Genesis 12:1-20</span>
                  <span>75% complete</span>
                </div>
              </div>
              
              <div className="glass-panel p-5">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <Ticket size={18} className="text-scripture-accent mr-2" />
                    <h3 className="font-medium">Weekly Challenge</h3>
                  </div>
                  <span className="text-xs font-medium text-scripture-accent bg-scripture-accent/10 px-2 py-1 rounded-full">25 TOKENS</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Memorize 5 verses this week</p>
                <Progress value={40} className="h-2 bg-muted" />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>2/5 verses</span>
                  <span>40% complete</span>
                </div>
              </div>
              
              <div className="glass-panel p-5">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <Award size={18} className="text-scripture-accent mr-2" />
                    <h3 className="font-medium">Monthly Achievement</h3>
                  </div>
                  <span className="text-xs font-medium text-scripture-accent bg-scripture-accent/10 px-2 py-1 rounded-full">100 TOKENS</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Complete a full book study</p>
                <div className="flex items-center mt-2">
                  <Sparkles size={16} className="text-scripture-accent mr-2" />
                  <span className="text-sm font-medium">Unlock premium commentary access</span>
                </div>
              </div>
            </div>
            
            <Button className="bg-scripture-deep hover:bg-scripture-deep/90 text-white">
              Start Earning <ChevronRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-scripture-accent to-scripture-deep rounded-2xl blur opacity-20 animate-pulse"></div>
              <div className="glass-panel p-8 relative">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-serif text-xl font-medium">Your Wallet</h3>
                  <div className="px-3 py-1 bg-scripture-accent/10 rounded-full">
                    <span className="text-scripture-accent font-medium">142 Tokens</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Current Streak</span>
                    <span className="font-medium">7 days</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <div 
                        key={day} 
                        className={`flex-1 h-2 rounded-full ${
                          day <= 5 ? 'bg-scripture-accent' : 'bg-scripture-accent/40'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-medium mb-2">Recent Activity</h4>
                  
                  {[
                    { action: "Completed daily reading", tokens: "+5", time: "Today, 9:32 AM" },
                    { action: "Shared verse on social", tokens: "+3", time: "Yesterday, 6:15 PM" },
                    { action: "Completed prayer journal", tokens: "+2", time: "Yesterday, 10:03 AM" },
                    { action: "Redeemed commentary access", tokens: "-50", time: "Aug 12, 3:45 PM" }
                  ].map((activity, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <div>
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                      <span className={`font-medium ${
                        activity.tokens.startsWith('+') ? 'text-green-600' : 'text-red-500'
                      }`}>
                        {activity.tokens}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <Button variant="outline" className="w-full border-scripture-accent text-scripture-accent hover:bg-scripture-accent/10">
                    View Token History
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

export default ReadToEarn;
