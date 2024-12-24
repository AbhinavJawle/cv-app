import { useCV } from "./CVLogic";
import { CVForm } from "./CVForm";
// import { Card } from "@/components/ui/card";
import "./CVApp.css"; // Add this for the imported CSS file

const CVPreview = ({ cv }) => (
  <div className="resume">
    <div className="resume-header">
      <h1>{cv.generalInfo.name || "Your Name"}</h1>
      <div className="resume-contact">
        {cv.generalInfo.email && <span>{cv.generalInfo.email} | </span>}
        {cv.generalInfo.phone && <span>{cv.generalInfo.phone}</span>}
      </div>
    </div>

    <div className="resume-section">
      <h2 className="resume-section-title">Education</h2>
      {cv.education.map((edu, index) => (
        <div key={edu.id || index} className="education-entry">
          <h3>{edu.school || "School Name"}</h3>
          <p>
            <strong>{edu.title || "Degree"}</strong>
          </p>
          <p>{edu.date || "Graduation Date"}</p>
        </div>
      ))}
    </div>

    <div className="resume-section">
      <h2 className="resume-section-title">Professional Experience</h2>
      {cv.experience.map((exp, index) => (
        <div key={exp.id || index} className="experience-entry">
          <h3>{exp.company || "Company Name"}</h3>
          <p>
            <strong>{exp.position || "Position"}</strong>
          </p>
          <p>{exp.date || "Employment Date"}</p>
          {exp.responsibilities && (
            <p className="responsibilities">{exp.responsibilities}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

export const CVApp = () => {
  const { cv, updateGeneralInfo, addItem, updateItem, removeItem } = useCV();

  return (
    <div className="cv-app">
      <div className="cv-container">
        <div className="edit-section">
          <CVForm
            cv={cv}
            updateGeneralInfo={updateGeneralInfo}
            addItem={addItem}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        </div>
        <div className="preview-section">
          <CVPreview cv={cv} />
        </div>
      </div>
    </div>
  );
};
