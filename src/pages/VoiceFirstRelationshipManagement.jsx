import HeroSection from '../components/HeroSection';
import VoiceFirstImg from '../assets/images/heroSectionsImg/voiceFirst-img.jpg';
import { LINKS } from '../constants/links';
import ContentSection from '../components/ContentSection';
import { sectionsData } from '../data/sectionsData';
import PromoSection from '../components/PromoSection';

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
      <PromoSection
        title="Join Relinkd today — and make every conversation count."
        buttons={[{ text: 'Get Started for Free', href: LINKS.GET_STARTED }]}
      />
    </>
  );
} 