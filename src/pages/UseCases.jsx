import ContentSection from '../components/ContentSection';
import { sectionsData } from '../data/sectionsData';
import PromoSection from '../components/PromoSection';
import { LINKS } from '../constants/links';

export default function UseCases() {
  return (
    <>
      {sectionsData.useCasesSections.map((section, idx) => (
        <ContentSection key={idx} {...section} />
      ))}
      <PromoSection
        title="Join Relinkd Today"
        subtitleAbove="Because some relationships are worth (re)building."
        buttons={[{ text: 'Get Started for Free', href: LINKS.GET_STARTED }]}
      />
    </>
  );
} 