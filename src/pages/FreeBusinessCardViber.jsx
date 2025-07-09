import HeroSection from '../components/HeroSection';
import FreeViberCallImg from '../assets/images/heroSectionsImg/freeViberCall-img.jpg';
import { LINKS } from '../constants/links';
import ContentSection from '../components/ContentSection';
import { sectionsData } from '../data/sectionsData';

export default function FreeBusinessCardViber() {
  return (
    <>
      <HeroSection
        title="Free Business Card in Viber"
        subtitle="Exchange contacts effortlessly. Stay up-to-date. No app required."
        buttons={[
          { text: 'Get Started for Free', href: LINKS.GET_STARTED, variant: 'primary' }
        ]}
        image={FreeViberCallImg}
        imageAlt="Relinkd Free Business Card in Viber preview"
        showViberLink={false}
      />
      {sectionsData.freeViberCallFirst.map((section, idx) => (
        <ContentSection key={idx} {...section} />
      ))}
      <div className="w-full text-center py-12 text-xl font-semibold text-gray-400">Other content here</div>
      {sectionsData.freeViberCallSecond.map((section, idx) => (
        <ContentSection key={idx} {...section} />
      ))}
    </>
  );
} 