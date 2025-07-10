import React from 'react';
import { LINKS } from '../constants/links';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f9ff]  pt-12 pb-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        {/* The Platform */}
        <div>
          <div className="mb-5 text-secondaryText font-roboto text-sectionTitle font-bold">The Platform</div>
          <ul className="space-y-2">
            <li><a href={LINKS.SUPPORT_NETWORK_ACTIVATION} className="text-secondaryText text-body font-normal hover:text-siteText transition">Support Network Activation</a></li>
            <li><a href={LINKS.VOICE_FIRST_RELATIONSHIP_MANAGEMENT} className="text-secondaryText text-body font-normal hover:text-siteText transition">Voice-First Relationship Management</a></li>
            <li><a href={LINKS.LINKEDIN_CONTACTS_ORGANIZER} className="text-secondaryText text-body font-normal hover:text-siteText transition">LinkedIn & Contacts Organizer</a></li>
            <li><a href={LINKS.PHONE_LINKEDIN_CONTACT_INTEGRATION} className="text-secondaryText text-body font-normal hover:text-siteText transition">Phone + LinkedIn Contact Integration</a></li>
            <li><a href={LINKS.FREE_BUSINESS_CARD_VIBER} className="text-secondaryText text-body font-normal hover:text-siteText transition">Free Business Card in Viber</a></li>
          </ul>
        </div>
        {/* Help & Community */}
        <div>
          <div className="mb-5 text-secondaryText font-roboto text-sectionTitle font-bold">Help & Community</div>
          <ul className="space-y-2">
            <li><a href={LINKS.BLOG} target="_blank" rel="noopener noreferrer" className="text-secondaryText text-body font-normal hover:text-siteText transition">Read the Blog on Substack</a></li>
            <li><a href={LINKS.HELP} target="_blank" rel="noopener noreferrer" className="text-secondaryText text-body font-normal hover:text-siteText transition">Open the Help Guide</a></li>
            <li><a href={LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-secondaryText text-body font-normal hover:text-siteText transition">Join the WhatsApp Community</a></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="mb-5 text-secondaryText font-roboto text-sectionTitle font-bold">Company</div>
          <ul className="space-y-2">
            <li><a href={LINKS.PRICING} className="text-secondaryText text-body font-normal hover:text-siteText transition">Pricing</a></li>
            <li><a href={LINKS.TERMS} target="_blank" rel="noopener noreferrer" className="text-secondaryText text-body font-normal hover:text-siteText transition">Terms of Service</a></li>
            <li><a href={LINKS.PRIVACY} target="_blank" rel="noopener noreferrer" className="text-secondaryText text-body font-normal hover:text-siteText transition">Privacy Policy</a></li>
          </ul>
        </div>
        {/* Get Relinkd Free */}
        <div className="flex flex-col items-start min-w-[220px]">
          <div className="mb-5 text-secondaryText font-roboto text-sectionTitle font-bold">Get Relinkd Free</div>
          <a href={LINKS.GET_STARTED} target="_blank" rel="noopener noreferrer" className="w-full mb-3 px-8 py-3 rounded-[5px] bg-relinkd-green text-white font-medium text-lg text-center shadow-md btn-hover-lift border border-relinkd-green">Get Started</a>
          <a href={LINKS.TRY_ON_VIBER} target="_blank" rel="noopener noreferrer" className="w-full px-8 py-3 rounded-[5px] bg-white text-relinkd-green font-medium text-lg text-center shadow-md btn-hover-lift border border-relinkd-green">Try on Viber</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-borderGrey text-center text-secondaryText text-overline">All rights reserved.</div>
    </footer>
  );
} 