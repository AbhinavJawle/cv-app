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

const INITIAL_STATE = {
  generalInfo: {
    name: "Morgan Oakely",
    email: "morganoakley77@gmail.key",
    phone: "1234567890",
  },

  //can add more to following
  experience: [
    {
      id: 1,
      company: "Morgan Stanley",
      position: "CEO",
      date: "",
      responsibilities: "Important tasks",
    },
  ],

  education: [
    { id: 1, school: "Morgan Convent", degreeTitle: "HSC", date: "" },
  ],
};

const useCV = () => {
  const { cv, setCV } = useState(INITIAL_STATE);

  const updateGeneralInfo = (field, value) => {
    setCV((prev) => ({
      ...prev,
      generalInfo: {
        ...prev.generalInfo,
        [field]: value,
      },
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

  const updateItem = (section, id, field, value) => {
    setCV((prev) => ({
      ...prev,
      [section]: prev[section].map((sectionItem) =>
        sectionItem.id === id ? { ...sectionItem, [field]: value } : sectionItem
      ),
    }));
  };

  const removeItem = (section, id) => {
    setCV((prev) => ({
      ...prev,
      [section]: prev[section].filter((sectionItem) => sectionItem.id !== id),
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
