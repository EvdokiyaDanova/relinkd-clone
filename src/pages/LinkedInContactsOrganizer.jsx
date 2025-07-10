import HeroSection from '../components/HeroSection';
import OrganizeNetworkImg from '../assets/images/heroSectionsImg/organizeNetwork-img.jpg';
import { LINKS } from '../constants/links';
import ContentSection from '../components/ContentSection';
import { sectionsData } from '../data/sectionsData';
import PromoSection from '../components/PromoSection';
import SectionCards from '../components/SectionCards';
import Card1 from '../assets/images/sectionCards/organizeNetwork-card-1.png';
import Card2 from '../assets/images/sectionCards/organizeNetwork-card-2.png';
import Card3 from '../assets/images/sectionCards/organizeNetwork-card-3.png';

export default function LinkedInContactsOrganizer() {
  return (
    <>
      <HeroSection
        title="LinkedIn & Contacts Organizer"
        subtitle="Turn your messy LinkedIn into a clean, searchable support network."
        buttons={[
          { text: 'Get Started for Free', href: LINKS.GET_STARTED, variant: 'primary' }
        ]}
        image={OrganizeNetworkImg}
        imageAlt="Relinkd LinkedIn & Contacts Organizer preview"
        showViberLink={false}
      />
     
      {sectionsData.linkedinContactsOrganizer.map((section, idx) => (
        <ContentSection key={idx} {...section} />
      ))}

      <SectionCards
        title="Benefits"
        cards={[
          {
            icon: Card1,
            text: 'No more noisy networks — clean up without deleting anyone.'
          },
          {
            icon: Card2,
            text: 'High-trust contacts rise to the top when you need them.'
          },
          {
            icon: Card3,
            text: 'Your network becomes a <b>searchable strategic asset</b>, not just a list of names.'
          }
        ]}
      />
      
      <PromoSection
        title="Join Relinkd today — and make every conversation count."
        buttons={[{ text: 'Get Started for Free', href: LINKS.GET_STARTED }]}
      />
    </>
  );
} 