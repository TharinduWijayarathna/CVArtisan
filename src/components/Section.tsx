import React from 'react';
import { Section as SectionType } from '../types/resume';
import { handleInputChange } from '../utils/formUtils';

interface SectionProps {
  section: SectionType;
  index: number;
  onSectionChange: (index: number, section: SectionType) => void;
  onRemoveSection: (index: number) => void;
}

const Section: React.FC<SectionProps> = ({ section, index, onSectionChange, onRemoveSection }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedSection = { ...section, [name]: value };
    onSectionChange(index, updatedSection);
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={section.title}
        onChange={handleChange}
        placeholder="Section Title"
      />
      <textarea
        name="content"
        value={section.content}
        onChange={handleChange}
        placeholder="Section Content"
      />
      <button onClick={() => onRemoveSection(index)}>Remove Section</button>
    </div>
  );
};

export default Section;
