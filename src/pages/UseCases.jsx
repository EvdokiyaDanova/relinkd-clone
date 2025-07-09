import ContentSection from '../components/ContentSection';
import { sectionsData } from '../data/sectionsData';

export default function UseCases() {
  return (
    <>
      {sectionsData.useCasesSections.map((section, idx) => (
        <ContentSection key={idx} {...section} />
      ))}
    </>
  );
} 