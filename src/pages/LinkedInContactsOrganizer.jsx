import HeroSection from '../components/HeroSection';
import OrganizeNetworkImg from '../assets/images/heroSectionsImg/organizeNetwork-img.jpg';
import { LINKS } from '../constants/links';
import ContentSection from '../components/ContentSection';
import { sectionsData } from '../data/sectionsData';
import PromoSection from '../components/PromoSection';

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
      <PromoSection
        title="Join Relinkd today — and make every conversation count."
        buttons={[{ text: 'Get Started for Free', href: LINKS.GET_STARTED }]}
      />
    </>
  );
} 