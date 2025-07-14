import React from 'react';
import { LINKS } from '../constants/links';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Free',
      price: '€0',
      period: '/ month',
      subtitle: 'All Relinkd core features:',
      buttonText: 'Get Started for Free',
      buttonStyle: 'outline',
      features: [
        'Import unlimited contacts',
        'Add notes or merge up to <b>50 contacts</b> into your support network',
        'Reconnect with your network and share mutual support',
        'Digital Business Card with easy QR sharing',
        'Import contacts from LinkedIn, Google, and Outlook (with merge support)',
        'Organize contacts with tags and search',
        'Track relationships with notes and reminders'
      ],
      highlighted: false
    },
    {
      name: 'Pro',
      price: '€5',
      period: '/ month',
              subtitle: '<b>€4 / month</b> if billed yearly (€48)',
      buttonText: 'Try it Free',
      buttonStyle: 'primary',
      features: [
        'Import unlimited contacts',
        'Add notes or merge <b>unlimited contacts</b>',
        '<b>1 hour</b> of AI Voice Notes per month',
        'AI Automatic Tagging',
        'Premium Business Card with custom design',
        'Import contacts from Email'
      ],
      highlighted: true,
      badge: 'Free trial'
    },
    {
      name: 'Premium',
      price: '€15',
      period: '/ month',
              subtitle: '<b>€12 / month</b> if billed yearly (€240)',
      buttonText: 'Contact us',
      buttonStyle: 'outline',
      features: [
        { text: 'EVERYTHING IN PRO AND:', noCheck: true },
        '<b>5 hours</b> of AI Voice Notes per month',
        'Contact us for additional voice minutes'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="w-full pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative w-full max-w-[363px] bg-white border flex flex-col justify-start items-start pt-6 rounded-2xl ${
                plan.highlighted ? 'border-relinkd-green' : 'border-borderGrey'
              }`}
            >
              {/* Free Trial Badge */}
              {plan.badge && (
                <div className="absolute -top-2 right-5 bg-relinkd-green text-white px-3 py-1 text-base rounded-sm">
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="w-full px-6 pb-6">
                <h3 className="text-sectionTitle text-siteText mb-2">
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-relinkd-green font-normal text-4xl">
                    {plan.price}
                  </span>
                  <span className="text-sectionTitle text-headerText font-normal">
                    {plan.period}
                  </span>
                </div>

                {plan.subtitle && (
                  <p 
                    className="text-secondaryText mb-4 text-base"
                    dangerouslySetInnerHTML={{ __html: plan.subtitle }}
                  />
                )}

                {/* Button */}
                <button
                  className={`w-full py-3 px-4 rounded-[5px] font-medium transition-all btn-hover-lift ${
                    plan.buttonStyle === 'primary'
                      ? 'bg-relinkd-green text-white'
                      : 'bg-transparent text-relinkd-green border border-relinkd-green'
                  }`}
                  onClick={() => {
                    if (plan.buttonText === 'Contact us') {
                      window.open('mailto:info@relinkd.net?subject=webflow%20site', '_blank');
                    } else if (plan.buttonText === 'Get Started for Free' || plan.buttonText === 'Try it Free') {
                      window.open(LINKS.GET_STARTED, '_blank');
                    }
                  }}
                >
                  {plan.buttonText}
                </button>
              </div>

              {/* Features */}
              <div className="w-full px-6 pb-6 flex-1">
                <ul>
                  {plan.features.map((feature, featureIndex) => {
                    const isSpecialHeader = typeof feature === 'object' && feature.noCheck;
                    const featureText = isSpecialHeader ? feature.text : feature;
                    
                    return (
                      <li 
                        key={featureIndex} 
                        className="flex items-start gap-3 py-2 px-6 -mx-6"
                        style={{
                          backgroundColor: featureIndex % 2 === 1 ? '#f5f9ff' : 'transparent'
                        }}
                      >
                        {!isSpecialHeader && (
                          <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                            <svg viewBox="0 0 16 16" className="w-4 h-4 text-relinkd-green">
                              <path
                                fill="currentColor"
                                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                              />
                            </svg>
                          </div>
                        )}
                        <span 
                          className={`text-secondaryText ${isSpecialHeader ? 'font-semibold text-xs' : 'text-base'}`}
                          dangerouslySetInnerHTML={{ __html: featureText }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans; 