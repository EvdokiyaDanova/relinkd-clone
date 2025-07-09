import HeroSection from '../components/HeroSection';
import FreeViberCallImg from '../assets/images/heroSectionsImg/freeViberCall-img.jpg';
import { LINKS } from '../constants/links';
import ContentSection from '../components/ContentSection';
import { sectionsData } from '../data/sectionsData';
import PromoSection from '../components/PromoSection';

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