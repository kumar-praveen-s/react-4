import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [student, setStudent] = useState([
    { name: "John", age: 24, course: "MERN", batch: "October" },
    { name: "Doe", age: 25, course: "MERN", batch: "September" },
    { name: "Biten", age: 26, course: "MERN", batch: "September" },
    { name: "Barar", age: 22, course: "MERN", batch: "November" },
    { name: "Christ", age: 23, course: "MERN", batch: "October" },
    { name: "Elent", age: 24, course: "MERN", batch: "November" },
  ]);

  return (
    <StudentContext.Provider value={[student, setStudent]}>
      {props.children}
    </StudentContext.Provider>
  );
};
