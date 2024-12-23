import { useState } from "react";

//constant, can't add more and more general information
const [generalInfo, setGeneralInfo] = useState({
  name: "Morgan Oakely",
  email: "morganoakley77@gmail.key",
  phone: "1234567890",
});

//can add more of the following components
const [education, setEducation] = useState([
  { school: "Morgan Convent", degreeTitle: "HSC", date: "" },
]);

const [experience, setExperience] = useState([
  {
    company: "Morgan Stanley",
    position: "CEO",
    date: "",
    responsibilities: "Important tasks",
  },
]);
