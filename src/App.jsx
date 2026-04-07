import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { PageNotFound } from "./Pages/PageNotFound";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Login } from "./Pages/Login";
import { College } from "./Pages/College";
import { Student } from "./Pages/Student";
import { StudentDetails } from "./Pages/Stdentdetails";
import { Department } from "./Pages/Department";
import { Details } from "./Pages/Details";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />

        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student/>} />
          <Route path="student/:id" element={<StudentDetails />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
