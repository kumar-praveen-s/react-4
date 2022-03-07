import { TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StudentContext } from "./context";

const StudentDescEdit = () => {
  const [student, setStudent] = useContext(StudentContext);
  const { id } = useParams();
  const [name, setName] = useState(id ? student[id - 1].name : "");
  const [age, setAge] = useState(id ? student[id - 1].age : 0);
  const [course, setCourse] = useState(id ? student[id - 1].course : "");
  const [batch, setBatch] = useState(id ? student[id - 1].batch : "");
  const Navigate = useNavigate();
  const handleClick = () => {
    if (id) {
      student[id - 1] = { name: name, age: age, course: course, batch: batch };
    } else {
      setStudent([
        ...student,
        {
          name: name,
          age: age,
          course: course,
          batch: batch,
        },
      ]);
    }
    Navigate("/studentdetails");
  };

  const handleCancel = () => {
    Navigate("/studentdetails");
  };

  return (
    <>
      <div className="input-container">
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="box"
        />
        <TextField
          id="outlined-name"
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="box"
        />
        <TextField
          id="outlined-name"
          label="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="box"
        />
        <TextField
          id="outlined-name"
          label="Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          className="box"
        />
        <button onClick={handleClick} className="btn-c-1 btn-stu-con">
          Update
        </button>
        <button className="btn-c-2 btn-stu-con" onClick={handleCancel}>
          cancel
        </button>
      </div>
    </>
  );
};

export default StudentDescEdit;
