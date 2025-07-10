import HeroSection from '../components/HeroSection';
import VoiceFirstImg from '../assets/images/heroSectionsImg/voiceFirst-img.jpg';
import { LINKS } from '../constants/links';
import ContentSection from '../components/ContentSection';
import { sectionsData } from '../data/sectionsData';
import PromoSection from '../components/PromoSection';
import SectionCards from '../components/SectionCards';
import Card1 from '../assets/images/sectionCards/voiceFirst-card-1.png';
import Card2 from '../assets/images/sectionCards/voiceFirst-card-2.png';
import Card3 from '../assets/images/sectionCards/voiceFirst-card-3.png';
import Card4 from '../assets/images/sectionCards/voiceFirst-card-4.png';
import Card5 from '../assets/images/sectionCards/voiceFirst-card-5.png';
import Card6 from '../assets/images/sectionCards/voiceFirst-card-6.png';

export default function VoiceFirstRelationshipManagement() {
  return (
    <>
      <HeroSection
        title="Voice-First Relationship Management"
        subtitle={"Relinkd – next-generation relationship management, powered by AI.\nHands-free. Human-first."}
        buttons={[
          { text: 'Get Started for Free', href: LINKS.GET_STARTED, variant: 'primary' }
        ]}
        image={VoiceFirstImg}
        imageAlt="Relinkd Voice-First Relationship Management preview"
        showViberLink={false}
      />
     
    
      {sectionsData.voiceFirstRelationshipManagement.map((section, idx) => (
        <ContentSection key={idx} {...section} />
      ))}

<SectionCards
        title="Benefits"
        subtitle="You don’t need a CRM.<br/>You need a <b>relationship memory system</b> that works like you do."
        cards={[
          {
            icon: Card1,
            text: 'Real-time, voice-based capture — fast, frictionless, and natural.'
          },
          {
            icon: Card2,
            text: 'Reminders with built-in social accountability.'
          },
          {
            icon: Card3,
            text: 'Build the habit of thoughtful reconnection.'
          },
          {
            icon: Card4,
            text: 'Higher-quality conversations & stronger relationships.'
          },
          {
            icon: Card5,
            text: 'Weekly check-ins to never lose track of important contacts.'
          },
          {
            icon: Card6,
            text: 'No more forgetting — everything is tagged, organized, and accessible.'
          }
        ]}
        cardMaxWidth={564}
        cardLayout="row"
      />
      
      <PromoSection
        title="Join Relinkd today — and make every conversation count."
        buttons={[{ text: 'Get Started for Free', href: LINKS.GET_STARTED }]}
      />
    </>
  );
} 