import "./CVForm.css"; // Add this for the imported CSS file

export const CVForm = ({
  cv,
  updateGeneralInfo,
  addItem,
  updateItem,
  removeItem,
}) => (
  <div className="cv-form">
    <section className="general-info">
      <h2>General Information</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Full Name"
          value={cv.generalInfo.name}
          onChange={(e) =>
            updateGeneralInfo("generalInfo", "name", e.target.value)
          }
          className="input"
        />
        <input
          type="email"
          placeholder="Email"
          value={cv.generalInfo.email}
          onChange={(e) =>
            updateGeneralInfo("generalInfo", "email", e.target.value)
          }
          className="input"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={cv.generalInfo.phone}
          onChange={(e) =>
            updateGeneralInfo("generalInfo", "phone", e.target.value)
          }
          className="input"
        />
      </div>
    </section>

    <section className="education-section">
      <h2>Education</h2>
      {cv.education.map((edu, index) => (
        <div key={index} className="education-item">
          <input
            type="text"
            placeholder="School"
            value={edu.school}
            onChange={(e) =>
              updateItem("education", index, "school", e.target.value)
            }
            className="input"
          />
          <input
            type="text"
            placeholder="Degree"
            value={edu.title}
            onChange={(e) =>
              updateItem("education", index, "title", e.target.value)
            }
            className="input"
          />
          <input
            type="text"
            placeholder="Date"
            value={edu.date}
            onChange={(e) =>
              updateItem("education", index, "date", e.target.value)
            }
            className="input"
          />

          <button
            onClick={() => removeItem("education", edu.id)}
            className="button"
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={() => addItem("education", "add")} className="addbutton">
        Add Education
      </button>
    </section>

    <section className="experience-section">
      <h2>Experience</h2>
      {cv.experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) =>
              updateItem("experience", index, "company", e.target.value)
            }
            className="input"
          />
          <input
            type="text"
            placeholder="Position"
            value={exp.position}
            onChange={(e) =>
              updateItem("experience", index, "position", e.target.value)
            }
            className="input"
          />
          <input
            type="text"
            placeholder="Date Range"
            value={exp.date}
            onChange={(e) =>
              updateItem("experience", index, "date", e.target.value)
            }
            className="input"
          />
          <textarea
            placeholder="Responsibilities"
            value={exp.responsibilities}
            onChange={(e) =>
              updateItem(
                "experience",
                index,
                "responsibilities",
                e.target.value
              )
            }
            className="textarea"
          />

          <button
            onClick={() => removeItem("experience", exp.id)}
            className="button"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={() => addItem("experience", "add")}
        className="addbutton"
      >
        Add Experience
      </button>
    </section>
  </div>
);
