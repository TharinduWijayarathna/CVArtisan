import React from 'react';
import { Resume } from '../types/resume';
import './ResumePreview.css';  // Import the CSS file for styling

const ResumePreview: React.FC<{ resume: Resume }> = ({ resume }) => {
  return (
    <div className="resume-preview">
      <header>
        <h1>{resume.personalInfo.name}</h1>
        <p>{resume.personalInfo.email} | {resume.personalInfo.phone}</p>
      </header>
      <section>
        {resume.sections.map((section, index) => (
          <div key={index} className="resume-section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResumePreview;
