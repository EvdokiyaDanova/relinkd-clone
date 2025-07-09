import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/icons/Relinkd-logo.svg';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { LINKS } from '../constants/links';

const platformLinks = [
  { label: 'Support Network Activation', to: LINKS.SUPPORT_NETWORK_ACTIVATION, icon: '🫱' },
  { label: 'Voice-First Relationship Management', to: LINKS.VOICE_FIRST_RELATIONSHIP_MANAGEMENT, icon: '🎤' },
  { label: 'LinkedIn & Contacts Organizer', to: LINKS.LINKEDIN_CONTACTS_ORGANIZER, icon: '🔗' },
  { label: 'Free Business Card in Viber', to: LINKS.FREE_BUSINESS_CARD_VIBER, icon: '💳' },
];

export default function Header() {
  const [platformOpen, setPlatformOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const baseText = 'text-body text-relinkd-gray font-normal';

  return (
    <header className="w-full bg-white font-sans select-none sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-[1290px] mx-auto px-8 h-[74px] w-full">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center gap-3 min-w-[170px]">
          <img src={logo} alt="Relinkd Logo" className="w-[150px] h-auto object-contain my-2" />
        </Link>
        {/* Hamburger (mobile only) */}
        <button
          className="ml-auto flex md:hidden items-center justify-center w-10 h-10 text-headerText focus:outline-none border-none bg-transparent shadow-none p-0 active:bg-transparent hover:bg-transparent relative z-[101]"
          style={{ background: 'none', boxShadow: 'none' }}
          onClick={() => setMobileMenuOpen(v => !v)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="block w-7 h-7 relative">
            <span
              className={`absolute left-0 top-1/2 w-7 h-[3px] rounded bg-headerText transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`}
              style={{transform: mobileMenuOpen ? 'rotate(45deg)' : 'translateY(-8px)'}}
            />
            <span
              className={`absolute left-0 top-1/2 w-7 h-[3px] rounded bg-headerText transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`}
              style={{transform: mobileMenuOpen ? 'rotate(-45deg)' : 'translateY(8px)'}}
            />
          </span>
        </button>
        {/* Navigation (desktop only) */}
        <nav className="flex-1 flex justify-center max-md:hidden">
          <ul className="flex items-center gap-2 md:gap-6 h-full">
            <li className="h-full flex items-center">
              <Link
                to="/"
                className={`px-4 py-2 h-full flex items-center ${baseText} hover:text-headerText`}
              >
                Home
              </Link>
            </li>
            <li className="relative h-full flex items-center"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
            >
              <button
                className={`px-4 py-2 flex items-center gap-1 h-full ${baseText} bg-transparent border-none focus:outline-none shadow-none hover:text-headerText`}
                aria-haspopup="true"
                aria-expanded={platformOpen}
                tabIndex={0}
                type="button"
              >
                The Platform
                <FiChevronDown className="w-5 h-5 ml-1" />
              </button>
              {platformOpen && (
                <div className="absolute top-full left-0 min-w-[350px] bg-white rounded-xl shadow-xl border border-gray-200 z-50 animate-fade-in">
                  <ul className="flex flex-col rounded-[5px]">
                    {platformLinks.map(link => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className={`flex items-center gap-1 px-6 py-2 text-relinkd-gray font-normal text-base leading-5 transition-colors hover:bg-[#f0f3f6] cursor-pointer hover:text-headerText`}
                          onClick={() => setPlatformOpen(false)}
                        >
                          <span className={`w-5 h-5 flex items-center justify-center shrink-0 object-center${link.label === 'Free Business Card in Viber' ? ' mb-[2px]' : ''}`}>{link.icon}</span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className="h-full flex items-center">
              <Link
                to={LINKS.USE_CASES}
                className={`px-4 py-2 h-full flex items-center ${baseText} hover:text-headerText`}
              >
                Use Cases
              </Link>
            </li>
            <li className="h-full flex items-center">
              <Link
                to={LINKS.HELP_COMMUNITY}
                className={`px-4 py-2 h-full flex items-center ${baseText} hover:text-headerText`}
              >
                Help & Community
              </Link>
            </li>
            <li className="h-full flex items-center">
              <Link
                to={LINKS.PRICING}
                className={`px-4 py-2 h-full flex items-center ${baseText} hover:text-headerText`}
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        {/* Sign Up */}
        <a
          href={LINKS.GET_STARTED}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-8 px-8 py-2 border border-relinkd-green text-relinkd-green rounded-[5px] font-normal text-base h-[52px] flex items-center justify-center min-w-[128px] transition-colors btn-hover-lift max-md:hidden"
        >
          Sign up
        </a>
        {/* Mobile menu drawer */}
        <div
          className={`fixed left-0 top-[74px] w-screen h-[calc(100vh-74px)] bg-white z-[100] transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
          style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
        >
          <nav className="flex flex-col gap-2 mt-4 px-6">
            <Link to="/" className="py-4 border-b text-headerText text-lg font-normal" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to={LINKS.SUPPORT_NETWORK_ACTIVATION} className="py-4 border-b text-headerText text-lg font-normal" onClick={() => setMobileMenuOpen(false)}>The Platform</Link>
            <Link to={LINKS.USE_CASES} className="py-4 border-b text-headerText text-lg font-normal" onClick={() => setMobileMenuOpen(false)}>Use Cases</Link>
            <Link to={LINKS.HELP_COMMUNITY} className="py-4 border-b text-headerText text-lg font-normal" onClick={() => setMobileMenuOpen(false)}>Help & Community</Link>
            <Link to={LINKS.PRICING} className="py-4 border-b text-headerText text-lg font-normal" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <a
              href={LINKS.GET_STARTED}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 mb-4 text-center text-relinkd-green font-normal text-lg btn-hover-lift"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 