import HeroSection from '../components/HeroSection';
import LinkCard from '../components/LinkCard';
import { LINKS } from '../constants/links';
import Icon1 from '../assets/images/linkCard/helpCommunity-linkCard-1.svg';
import Icon2 from '../assets/images/linkCard/helpCommunity-linkCard-2.png';
import Icon3 from '../assets/images/linkCard/helpCommunity-linkCard-3.svg';
import Icon4 from '../assets/images/linkCard/helpCommunity-linkCard-4.png';

export default function HelpCommunity() {
  return (
    <>
      <HeroSection
        title="Help & Community"
        subtitle="Everything you need to get the most out of Relinkd — plus ways to connect, learn, and shape the future of the platform."
        showViberLink={false}
      />
      
      <div className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <LinkCard
            icon={Icon1}
            title="The Relinkd Blog: Support Networks in the AI Era"
            description="Explore stories, lessons, and reflections on the evolving role of personal networks in an AI-powered world."
            linkText="Read the Blog on Substack →"
            linkHref={LINKS.BLOG}
          />
          
          <LinkCard
            icon={Icon2}
            title="Help Guide"
            description="Learn how to use and navigate Relinkd with step-by-step instructions and feature tips."
            linkText="Open the Help Guide →"
            linkHref={LINKS.HELP}
          />
          
          <LinkCard
            icon={Icon3}
            title="WhatsApp Community"
            description="Join our WhatsApp group to connect with other Relinkd users, share ideas, and get peer support."
            linkText="Join the WhatsApp Community →"
            linkHref={LINKS.WHATSAPP}
          />
          
          <LinkCard
            icon={Icon4}
            title="Feature Requests & Feedback"
            description="Have ideas or suggestions? We're listening — help us improve Relinkd by sharing your feedback."
            linkText="Click here to leave feedback →"
            linkHref={LINKS.GET_STARTED}
          />
        </div>
      </div>
    </>
  );
} 