import { useState } from "react";

const EMPTY_EDUCATION = {
  school: "",
  title: "",
  date: "",
};

const EMPTY_EXPERIENCE = {
  company: "",
  position: "",
  date: "",
  responsibilities: "",
};

// const INITIAL_STATE = {
//   generalInfo: { name: "", email: "", phone: "" },
//   education: [{ id: Date.now(), ...EMPTY_EDUCATION }],
//   experience: [{ id: Date.now(), ...EMPTY_EXPERIENCE }],
// };

const INITIAL_STATE = {
  generalInfo: {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
  },
  education: [
    {
      id: Date.now(),
      school: "Springfield High School",
      title: "12th Grade",
      date: "2015",
    },
    {
      id: Date.now() + 1,
      school: "Harvard University",
      title: "Bachelor of Science in Computer Science",
      date: "2019",
    },
    {
      id: Date.now() + 2,
      school: "Stanford University",
      title: "Master of Science in Computer Science",
      date: "2021",
    },
  ],
  experience: [
    {
      id: Date.now() + 3,
      company: "Tech Solutions Inc.",
      position: "Software Engineer",
      date: "2020-2022",
      responsibilities:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Led a team of 3 junior developers.",
    },
    {
      id: Date.now() + 4,
      company: "Innovative Tech Corp.",
      position: "Senior Software Engineer",
      date: "2022-Present",
      responsibilities:
        "Worked on the development of enterprise-level software solutions. Mentored junior engineers and collaborated with cross-functional teams to enhance product features.",
    },
  ],
};

export const useCV = () => {
  const [cv, setCV] = useState(INITIAL_STATE);

  // Updated to handle section and field parameters
  const updateGeneralInfo = (section, field, value) => {
    setCV((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // Updated to use index instead of id
  const updateItem = (section, index, field, value) => {
    setCV((prev) => ({
      ...prev,
      [section]: prev[section].map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addItem = (section) => {
    const newItem =
      section === "education" ? EMPTY_EDUCATION : EMPTY_EXPERIENCE;
    setCV((prev) => ({
      ...prev,
      [section]: [...prev[section], { ...newItem, id: Date.now() }],
    }));
  };

  const removeItem = (section, id) => {
    setCV((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  return {
    cv,
    updateGeneralInfo,
    addItem,
    updateItem,
    removeItem,
  };
};
