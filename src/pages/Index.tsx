
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScriptureInsights from "@/components/ScriptureInsights";
import StudyRecommendations from "@/components/StudyRecommendations";
import ReadToEarn from "@/components/ReadToEarn";
import CommunityDiscussion from "@/components/CommunityDiscussion";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ScriptureInsights />
        <StudyRecommendations />
        <ReadToEarn />
        <CommunityDiscussion />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
