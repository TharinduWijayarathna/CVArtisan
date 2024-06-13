import React, { useState } from 'react';
import { Resume, Section } from '../types/resume';
import SectionComponent from './Section';

const ResumeForm: React.FC<{ onSave: (resume: Resume) => void }> = ({ onSave }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [sections, setSections] = useState<Section[]>([]);

  const handleAddSection = () => {
    setSections([...sections, { title: '', content: '' }]);
  };

  const handleSectionChange = (index: number, updatedSection: Section) => {
    const updatedSections = sections.map((section, i) => (i === index ? updatedSection : section));
    setSections(updatedSections);
  };

  const handleRemoveSection = (index: number) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSave = () => {
    onSave({ personalInfo, sections });
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <input
        type="text"
        name="name"
        value={personalInfo.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={personalInfo.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="tel"
        name="phone"
        value={personalInfo.phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <h2>Sections</h2>
      {sections.map((section, index) => (
        <SectionComponent
          key={index}
          index={index}
          section={section}
          onSectionChange={handleSectionChange}
          onRemoveSection={handleRemoveSection}
        />
      ))}
      <button onClick={handleAddSection}>Add Section</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ResumeForm;
