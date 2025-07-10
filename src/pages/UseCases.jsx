import ContentSection from '../components/ContentSection';
import { sectionsData } from '../data/sectionsData';
import PromoSection from '../components/PromoSection';
import { LINKS } from '../constants/links';
import SectionCards from '../components/SectionCards';
import Card1 from '../assets/images/sectionCards/useCases-card-1.png';
import Card2 from '../assets/images/sectionCards/useCases-card-2.png';

export default function UseCases() {
  return (
    <>
      {sectionsData.useCasesSections.map((section, idx) => (
        <ContentSection key={idx} {...section} />
      ))}
      <SectionCards
        title="The Outcome"
        subtitle="Relinkd turns every event into a relationship engine."
        cards={[
          {
            icon: Card1,
            text: 'That spontaneous encounter? Now it\'s a tracked, trusted reconnection — with momentum and meaning.'
          },
          {
            icon: Card2,
            text: 'You keep the warmth of the moment, and never lose the opportunity it holds.'
          }
        ]}
        cardMaxWidth={564}
        cardLayout="row"
      />
      <PromoSection
        title="Join Relinkd Today"
        subtitleAbove="Because some relationships are worth (re)building."
        buttons={[{ text: 'Get Started for Free', href: LINKS.GET_STARTED }]}
      />
    </>
  );
} 