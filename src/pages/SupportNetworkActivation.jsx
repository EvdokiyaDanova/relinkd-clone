import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import SupportNetworkImg from '../assets/images/heroSectionsImg/SupportNetwork-video.jpg';
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
    </>
  );
} 