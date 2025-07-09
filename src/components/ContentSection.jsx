import React from 'react';

export default function ContentSection({
  image,
  imageAlt = '',
  align = 'left', // 'left' или 'right'
  overline,
  title,
  subtitle,
  plain,
  bullets = [],
  afterBullets,
  link,
  button,
  className = '',
}) {
  return (
    <section className={`w-full py-12 md:py-20 px-4 ${className}`}>
      <div className={`max-w-[544px] md:max-w-[1152px] mx-auto flex flex-col md:flex-row ${align === 'right' ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-0 md:justify-between`}>
        {/* Текстова част */}
        <div className="flex-1 min-w-[280px] text-left max-w-[544px] mx-auto md:max-w-none md:mx-0">
          {overline && <div className="text-overline text-secondaryText mb-2 font-normal">{overline}</div>}
          {title && <h2 className="text-h2 font-bold text-siteText mb-4">{title}</h2>}
          {subtitle && <div className="text-body text-secondaryText mb-4 font-normal" dangerouslySetInnerHTML={{__html: subtitle}} />}
          {plain && <div className="text-body text-secondaryText mb-4 font-normal">{plain}</div>}
          {bullets.length > 0 && (
            <ul className="list-disc pl-5 mb-4 text-body text-secondaryText space-y-2">
              {bullets.map((b, i) => <li key={i} dangerouslySetInnerHTML={{__html: b}} />)}
            </ul>
          )}
          {afterBullets && <div className="text-body text-secondaryText mb-4 font-normal" dangerouslySetInnerHTML={{__html: afterBullets}} />}
          {link && (
            <a href={link.href} className="inline-flex items-center gap-1 text-body text-relinkd-blueMain font-normal mb-4 transition grayscale-hover" target="_blank" rel="noopener noreferrer">
              {link.text} <span aria-hidden>→</span>
            </a>
          )}
          {button && (
            <a
              href={button.href}
              className="inline-block mt-4 px-8 py-3 rounded-lg bg-relinkd-blueMain text-white font-medium text-lg shadow-md btn-hover-lift transition hover:-translate-y-1"
              style={{ borderRadius: '5px' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {button.text}
            </a>
          )}
        </div>
        {/* Картинка */}
        {image && (
          <div className="flex-1 flex justify-center items-center min-w-[220px]">
            <img src={image} alt={imageAlt} className="w-full h-auto rounded-xl object-contain" />
          </div>
        )}
      </div>
    </section>
  );
} 