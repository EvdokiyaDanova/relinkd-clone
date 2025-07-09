import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import IconViber from '../assets/images/icons/icon_viber.svg';
import { LINKS } from '../constants/links';

export default function HeroSection({
  title,
  subtitle,
  buttons = [], // [{ text, href, onClick, variant }]
  image,
  videoUrl,
  imageAlt = '',
  showViberLink = true,
}) {
  const [showVideo, setShowVideo] = useState(false);

  // Popup overlay for YouTube
  const VideoPopup = () => (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl aspect-video bg-black">
        <button
          className="absolute p-0 top-0 right-0 z-10 w-8 h-8 flex items-center justify-center bg-white text-headerText rounded-full shadow-lg hover:bg-gray-100 transition border border-gray-200"
          style={{ transform: 'translate(50%,-50%)' }}
          onClick={() => setShowVideo(false)}
          aria-label="Close video"
        >
          <svg
            className="w-5 h-5 text-headerText"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="5" y1="5" x2="15" y2="15" />
            <line x1="15" y1="5" x2="5" y2="15" />
          </svg>
        </button>
        <iframe
          className="w-full h-full"
          src={videoUrl || ''}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );

  // Филтрирай бутоните според наличието на видео
  const filteredButtons = buttons.filter(
    (btn) =>
      btn.variant !== 'video' || (btn.variant === 'video' && videoUrl)
  );

  return (
    <section className="w-full flex flex-col items-center justify-center pt-12 pb-8 px-4 md:px-0">
      <div className="max-w-3xl w-full flex flex-col items-center text-center mb-8">
        {title && <h1 className="text-h1 font-bold text-siteText mb-4">{title}</h1>}
        {subtitle && <p className="text-xl text-secondaryText mb-8">{subtitle}</p>}
        {filteredButtons.length > 0 && (
          <div className="flex flex-col md:flex-row gap-4 mb-6 w-full justify-center items-center">
            {filteredButtons.map((btn) =>
              btn.variant === 'primary' ? (
                <a
                  key={btn.text}
                  href={btn.href}
                  className="px-8 py-3 rounded-lg bg-relinkd-blueMain text-white font-medium text-lg shadow-md min-w-[220px] text-center btn-hover-lift"
                  {...(btn.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {btn.text}
                </a>
              ) : btn.variant === 'video' && videoUrl ? (
                <button
                  key={btn.text}
                  onClick={() => setShowVideo(true)}
                  className="px-8 py-3 rounded-lg border border-borderGrey border-[1px] text-relinkd-blueMain font-medium text-lg bg-white min-w-[220px] flex items-center justify-center gap-2 btn-hover-lift hover:border-borderGrey focus:border-borderGrey active:border-borderGrey"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-relinkd-blueMain">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <polygon points="4,3 11,7 4,11" fill="currentColor" className="text-relinkd-blueMain" />
                    </svg>
                  </span>
                  {btn.text}
                </button>
              ) : null
            )}
          </div>
        )}
        {/* Viber paragraph and link */}
        {showViberLink && (
          <div className="w-full flex flex-col items-center justify-center mb-4">
            <p className="text-center text-small font-normal text-secondaryText mb-2">Create your free digital business card in Viber</p>
            <a
              href={LINKS.TRY_ON_VIBER}
              className="flex items-center justify-center gap-1 text-small font-normal text-relinkd-blueMain cursor-pointer transition hover:filter hover:grayscale"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Viber SVG icon - използва се SVG файл */}
              <img src={IconViber} alt="Viber" width={16} height={16} className="block" />
             <span>Get Started on Viber</span> 
            </a>
          </div>
        )}
      </div>
      {image && (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative w-full mx-auto cursor-pointer group" onClick={videoUrl ? () => setShowVideo(true) : undefined}>
            <img
              src={image}
              alt={imageAlt}
              className="object-contain mx-auto d-block"
              style={{ width: '100%', height: 'auto', maxWidth: '1098px', borderRadius: '1rem' }}
            />
            {videoUrl && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                  <svg width="44" height="44" fill="none" viewBox="0 0 44 44"><circle cx="22" cy="22" r="22" className="text-relinkd-blueMain" fill="currentColor"/><path d="M18 15v14l12-7-12-7z" fill="#fff"/></svg>
                </span>
              </span>
            )}
          </div>
        </div>
      )}
      {showVideo && videoUrl && <VideoPopup />}
    </section>
  );
} 