import React from "react";

/**
 * Универсален секционен компонент с карти (икона + текст), заглавие, подзаглавие и опционално заглавие под картите.
 *
 * Props:
 * - title: string (основно заглавие)
 * - subtitle: string (подзаглавие, може HTML)
 * - cards: [{ icon, text }]
 * - titleBelow: string (заглавие под картите, може HTML, по желание)
 */
const SectionCards = ({ title, subtitle, cards, titleBelow, cardMaxWidth, cardLayout }) => {
  const maxWidth = cardMaxWidth || 368;
  const isRow = cardLayout === 'row';
  return (
    <section className="w-full flex flex-col items-center py-12 px-2">
      {title && (
        <h2 className="text-h2 text-siteText font-bold text-center" dangerouslySetInnerHTML={{ __html: title }} />
      )}
      {subtitle && (
        <div
          className="text-body text-secondaryText text-center mt-2"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
      <div className="w-full max-w-7xl my-9 flex flex-wrap justify-center gap-6 items-stretch">
        {cards && cards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-white w-full rounded-2xl shadow p-8 flex ${isRow ? 'flex-row items-center' : 'flex-col items-start'} text-left`}
            style={{ maxWidth: `${maxWidth}px`, flex: '1 1 ${maxWidth}' }}
          >
            <div
              className={`w-[100px] h-[100px] flex items-center justify-center rounded-xl overflow-hidden ${isRow ? 'mr-6 mb-0' : 'mb-4'}`}
            >
              <img
                src={card.icon}
                alt=""
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
            <div className="flex-1">
              {card.title && (
                <h3 className="text-body font-bold text-[#4b4b4b] mb-3">
                  {card.title}
                </h3>
              )}
              <div
                className="text-body text-secondaryText"
                dangerouslySetInnerHTML={{ __html: card.text }}
              />
            </div>
          </div>
        ))}
      </div>
      {titleBelow && (
        <div
          className="text-body text-secondaryText text-center"
          dangerouslySetInnerHTML={{ __html: titleBelow }}
        />
      )}
    </section>
  );
};

// Премахвам PropTypes и типизацията
export default SectionCards; 