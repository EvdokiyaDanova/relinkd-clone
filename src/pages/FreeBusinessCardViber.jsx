import HeroSection from '../components/HeroSection';
import FreeViberCallImg from '../assets/images/heroSectionsImg/freeViberCall-img.jpg';
import { LINKS } from '../constants/links';
import ContentSection from '../components/ContentSection';
import { sectionsData } from '../data/sectionsData';
import PromoSection from '../components/PromoSection';
import SectionCards from '../components/SectionCards';
import Card1 from '../assets/images/sectionCards/freeViberCall-card-1.png';
import Card2 from '../assets/images/sectionCards/freeViberCall-card-2.png';
import Card3 from '../assets/images/sectionCards/freeViberCall-card-3.png';
import Card4 from '../assets/images/sectionCards/freeViberCall-card-4.png';
import Card21 from '../assets/images/sectionCards/freeViberCall-card-2.1.png';
import Card22 from '../assets/images/sectionCards/freeViberCall-card-2.2.png';
import Card23 from '../assets/images/sectionCards/freeViberCall-card-2.3.png';
import Card24 from '../assets/images/sectionCards/freeViberCall-card-2.4.png';

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
     
     <SectionCards
        title={"Decrease Your Carbon Footprint By <br/> Introducing Digital Cards Today"}
        cards={[
          {
            icon: Card1,
            text: '27 million business cards are printed daily / 10 billion yearly.'
          },
          {
            icon: Card2,
            text: '90% of business cards exchanged are discarded within 24 hours.'
          },
          {
            icon: Card3,
            text: 'Producing just one sheet of paper requires 10 litters of water.'
          },
          {
            icon: Card4,
            text: 'Over 118,308 trees are being cut each year for business cards.'
          }
        ]}
        cardMaxWidth={270}
      />

      {sectionsData.freeViberCallSecond.map((section, idx) => (
        <ContentSection key={idx} {...section} />
      ))}
      
      <SectionCards
        title="Benefits"
        cards={[
          {
            icon: Card21,
            text: 'Eco-friendly and cost-free — no printing, no waste.'
          },
          {
            icon: Card22,
            text: 'Keep all your contact info up to date in real time.'
          },
          {
            icon: Card23,
            text: 'Understand mutual support potential instantly.'
          },
          {
            icon: Card24,
            text: 'Set the tone for meaningful conversations — and build relationships faster.'
          }
        ]}
        cardMaxWidth={564}
        cardLayout="row"
      />
      
      <PromoSection
        title="Create your free digital business card now"
        subtitleBelow="Become part of a smarter, connected support network"
        buttons={[
          { text: 'Get Started for Free', href: LINKS.GET_STARTED },
          { text: 'Try on Viber', href: LINKS.TRY_ON_VIBER }
        ]}
      >
        <div>
          <a
            href={LINKS.SUPPORT_NETWORK_ACTIVATION}
            className="inline-flex items-center gap-1 text-white text-small underline-offset-2 hover:underline transition"
          >
            Learn more about Support Networks <span aria-hidden>→</span>
          </a>
        </div>
      </PromoSection>
    </>
  );
} 