import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import SupportNetworkImg from '../assets/images/heroSectionsImg/SupportNetwork-video.jpg';
import PromoSection from '../components/PromoSection';
import SectionCards from '../components/SectionCards';
import Card1 from '../assets/images/sectionCards/SupportNetwork-card-1.png';
import Card2 from '../assets/images/sectionCards/SupportNetwork-card-2.png';
import Card3 from '../assets/images/sectionCards/SupportNetwork-card-3.png';
import { LINKS } from '../constants/links';
import { sectionsData } from '../data/sectionsData';

export default function SupportNetworkActivation() {
  return (
    <>
      <HeroSection
        title="Support Network Activation"
        subtitle="Turn passive connections into an active circle of mutual support"
        buttons={[
          { text: 'Get Started for Free', href: LINKS.GET_STARTED, variant: 'primary' },
          { text: 'Watch video', variant: 'video' }
        ]}
        image={SupportNetworkImg}
        imageAlt="Relinkd Support Network Activation preview"
        videoUrl={LINKS.VIDEO_HOME}
        showViberLink={false}
      />
     
      {sectionsData.supportNetworkActivation.map((section, idx) => (
        <ContentSection key={idx} {...section} />
      ))}
      
    <SectionCards
        title="The Results"
        subtitle="You build your support network one <b>relationship at a time</b> — <br/> intentionally and intelligently."
        cards={[
          {
            icon: Card1,
            text: 'A clear, actionable map of who supports you — from Day 1.'
          },
          {
            icon: Card2,
            text: 'Dormant contacts become mutual allies.'
          },
          {
            icon: Card3,
            text: 'Lower cognitive load — no more mental juggling of “Who can help me right now?”'
          }
        ]}
        titleBelow="You stop relying on memory — and start activating real support,<br/>whenever you need it."
      />

      <PromoSection
        title="Ready to build your Support Network?"
        buttons={[{ text: 'Get Started for Free', href: LINKS.GET_STARTED }]}
      />
    </>
  );
} 