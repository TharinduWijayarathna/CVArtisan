import React, { useState, useRef } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import { Resume } from '../types/resume';
import ReactToPrint from 'react-to-print';
import './ResumeBuilder.css';  // Import the CSS file for printing styles

const ResumeBuilder: React.FC = () => {
  const [resume, setResume] = useState<Resume | null>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleSave = (resume: Resume) => {
    setResume(resume);
  };

  return (
    <div className="resume-builder">
      <ResumeForm onSave={handleSave} />
      {resume && (
        <div>
          <div ref={resumeRef}>
            <ResumePreview resume={resume} />
          </div>
          <ReactToPrint
            trigger={() => <button>Print Resume</button>}
            content={() => resumeRef.current}
          />
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
