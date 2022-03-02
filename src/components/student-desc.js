import React from "react";
import { useParams } from "react-router-dom";

const StudentDesc = () => {
  const { id } = useParams();
  return <h1>Student with {id}</h1>;
};

export default StudentDesc;
