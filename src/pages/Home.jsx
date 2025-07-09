import HeroSection from '../components/HeroSection.jsx';
import homeVideoImg from '../assets/images/heroSectionsImg/home-video.jpg';
import PromoSection from '../components/PromoSection.jsx';
import { LINKS } from '../constants/links';
import { sectionsData } from '../data/sectionsData';
import ContentSection from '../components/ContentSection';

export default function Home() {
  return (
    <>
      <HeroSection
        title="Reconnect with the people who once mattered"
        subtitle="And turn them into your support network"
        buttons={[
          { text: 'Get Started for Free', href: LINKS.GET_STARTED, variant: 'primary' },
          { text: 'Watch video', variant: 'video' }
        ]}
        image={homeVideoImg}
        imageAlt="Relinkd video preview"
        videoUrl={LINKS.VIDEO_HOME}
      />
      {sectionsData.home.map((section, i) => (
        <ContentSection key={i} {...section} />
      ))}
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p>Това е началната страница.</p>
      </div>
      <PromoSection
        title="Ready to build your Support Network?"
        buttons={[
          { text: 'Get Started for Free', href: LINKS.GET_STARTED }
        ]}
      />
    </>
  );
} 