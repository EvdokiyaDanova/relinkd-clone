import React from 'react';
import BGR from '../assets/images/icons/BGR.svg';
import { LINKS } from '../constants/links';

/**
 * PromoSection компонент
 * @param {string} title - основен текст
 * @param {string} subtitle - подзаглавие
 * @param {Array} buttons - масив с бутони [{ text, href, variant }]
 * @param {string} className - допълнителни класове
 */
export default function PromoSection({
  title,
  subtitle,
  buttons = [],
  className = '',
}) {
  // Проверка дали има два бутона и кой е primary
  const hasTwoButtons = buttons.length === 2;
  return (
    <section
      className={`w-full flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden ${className}`}
      style={{ minHeight: 400 }}
    >
      {/* Бекграунд изображение */}
      <img src={BGR} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none" />
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-white font-bold text-h2 text-center mb-4" style={{fontFamily: 'Roboto, sans-serif'}}>{title}</h2>
        {subtitle && (
          <p className="text-white text-small text-center mb-8 max-w-xl mx-auto" style={{fontFamily: 'Roboto, sans-serif'}}>{subtitle}</p>
        )}
        <div className={`flex flex-col md:flex-row gap-4 mb-4 w-full justify-center items-center ${hasTwoButtons ? 'max-w-2xl' : ''}`}>
          {buttons.map((btn, idx) => {
            // Ако има два бутона и това е първият, правим го бял
            const isWhite = hasTwoButtons && idx === 0;
            const isOutline = (!hasTwoButtons && buttons.length === 1) || (hasTwoButtons && idx === 1);
            // Автоматично попълване на href за основните бутони
            let href = btn.href;
            if (!href) {
              if (btn.text === 'Get Started for Free') href = LINKS.GET_STARTED;
              if (btn.text === 'Try on Viber') href = LINKS.TRY_ON_VIBER;
            }
            return (
              <a
                key={btn.text}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-lg font-medium text-lg min-w-[220px] text-center btn-hover-lift transition hover:-translate-y-1 shadow-md
                  ${isWhite ? 'bg-white text-relinkd-blueMain border border-white' : ''}
                  ${isOutline ? 'bg-transparent text-white border border-white' : ''}
                  ${!isWhite && !isOutline ? 'bg-relinkd-blueMain text-white' : ''}
                `}
                style={{ borderRadius: '5px', borderWidth: isWhite || isOutline ? 1 : undefined, borderColor: '#fff' }}
              >
                {btn.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
} 