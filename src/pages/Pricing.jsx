import HeroSection from '../components/HeroSection';
import SectionCards from '../components/SectionCards';
import PricingPlans from '../components/PricingPlans';
import Card1 from '../assets/images/sectionCards/pricing-card-1.png';
import Card2 from '../assets/images/sectionCards/pricing-card-2.png';

export default function Pricing() {
  return (
    <>
      <HeroSection
        title="Pricing Plans"
        showViberLink={false}
      />
      
      <PricingPlans />
      
      <div className="w-full border-t border-borderGrey"></div>
      
      <SectionCards
        cards={[
          {
            icon: Card1,
            title: 'For Businesses',
            text: 'Contact us at <a href="mailto:info@relinkd.net?subject=webflow%20site%20contact" class="link-2"><b>info@relinkd.net</b></a> for more information about our corporate offers to help you build a mutual support network for your employees or members.'
          },
          {
            icon: Card2,
            title: 'For Communities',
            text: 'Contact us for more information about providing your community members with a <b>free digital business card</b> and tools to help them <b>build their support network</b>.'
          }
        ]}
        cardMaxWidth={1152}
        cardLayout="row"
      />
    </>
  );
} 