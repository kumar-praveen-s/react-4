import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
  TableBody,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "./context";

const StudentDetails = () => {
  const tablestyle = {
    width: "95%",
    borderRadius: "10px",
    position: "absolute",
    top: "250px",
    left: "2.5%",
  };
  const style = {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "20px",
  };
  const stylebody = {
    textAlign: "center",
    fontSize: "18px",
  };
  const border = { "&:last-child td, &:last-child th": { border: 0 } };
  const [student] = useContext(StudentContext);
  // console.log(student);
  // const student = [
  //   { name: "John", age: 24, course: "MERN", batch: "October" },
  //   { name: "Doe", age: 25, course: "MERN", batch: "September" },
  //   { name: "Biten", age: 26, course: "MERN", batch: "September" },
  //   { name: "Barar", age: 22, course: "MERN", batch: "November" },
  //   { name: "Christ", age: 23, course: "MERN", batch: "October" },
  //   { name: "Elent", age: 24, course: "MERN", batch: "November" },
  // ];
  return (
    <>
      <div className="student">
        <h1>Student</h1>
        <Link to="/studentdesc">
          <button className="btn-style">New Student</button>
        </Link>
      </div>
      <TableContainer component={Paper} style={tablestyle}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={style}>Name</TableCell>
              <TableCell style={style}>Age</TableCell>
              <TableCell style={style}>Course</TableCell>
              <TableCell style={style}>Batch</TableCell>
              <TableCell style={style}>Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {student.map((row, pos) => (
              <TableRow key={pos + 1} sx={border}>
                <TableCell style={stylebody}>{row.name}</TableCell>
                <TableCell style={stylebody}>{row.age}</TableCell>
                <TableCell style={stylebody}>{row.course}</TableCell>
                <TableCell style={stylebody}>{row.batch}</TableCell>
                <TableCell style={stylebody}>
                  <Link to={`/studentdesc/${pos + 1}`} className="link">
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentDetails;
