import { useState } from "react";

const INITIAL_STATE = {
  generalInfo: {
    name: "Morgan Oakely",
    email: "morganoakley77@gmail.key",
    phone: "1234567890",
  },
  //can add more to following
  experience: [
    {
      company: "Morgan Stanley",
      position: "CEO",
      date: "",
      responsibilities: "Important tasks",
    },
  ],

  education: [{ school: "Morgan Convent", degreeTitle: "HSC", date: "" }],
};
const useCV = () => {
  const { cv, setCV } = useState(INITIAL_STATE);
};
