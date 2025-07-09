import React from 'react';
import BGR from '../assets/images/icons/BGR.svg';
import { LINKS } from '../constants/links';

/**
 * PromoSection компонент
 * @param {string} title - основен текст
 * @param {string} subtitleAbove - подзаглавие над бутоните
 * @param {string} subtitleBelow - подзаглавие под бутоните
 * @param {Array} buttons - масив с бутони [{ text, href, variant }]
 * @param {string} className - допълнителни класове
 * @param {ReactNode} children - съдържание под subtitleBelow (напр. линк)
 */
export default function PromoSection({
  title,
  subtitleAbove,
  subtitleBelow,
  buttons = [],
  className = '',
  children,
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
      <div className="relative z-10 w-full max-w-[544px] flex flex-col items-center mx-auto">
        <h2 className="text-white font-bold text-h2 text-center mb-4">{title}</h2>
        {subtitleAbove && (
          <p className="text-white text-body mb-4 text-center max-w-xl mx-auto">{subtitleAbove}</p>
        )}
        <div className={`flex flex-col md:flex-row gap-4 my-4 w-full justify-center items-center ${hasTwoButtons ? 'max-w-2xl' : ''}`}>
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
        {subtitleBelow && (
          <p className="text-white text-small text-center max-w-xl mx-auto">{subtitleBelow}</p>
        )}
        {children && (
          <div className="flex flex-col items-center w-full">{React.Children.map(children, child => {
            if (React.isValidElement(child) && child.type === 'a') {
              return React.cloneElement(child, {
                className: (child.props.className || '').replace('btn-hover-lift', '')
              });
            }
            return child;
          })}</div>
        )}
      </div>
    </section>
  );
} 