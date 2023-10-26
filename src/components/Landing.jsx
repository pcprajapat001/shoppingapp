import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { AddUser } from "./AddUser";
import { ShowUser } from "./ShowUser";
import { Oneplus } from "./Oneplus";
import { Redmies } from "./Redmies";
import { Sumsungs } from "./Sumsungs";
import { Vivoes } from "./Vivoes";
import { AddAdmin } from "./AddAdmin";
import { ShowAdmin } from "./ShowAdmin";
import { Customers } from "./Customers";
import { Employees } from "./Employees";
import { Students } from "./Students";
import { Teachers } from "./Teachers";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/showuser" element={<ShowUser />} />
        <Route path="/oneplus" element={<Oneplus />} />
        <Route path="/redmies" element={<Redmies />} />
        <Route path="/sumsungs" element={<Sumsungs />} />
        <Route path="/vivoes" element={<Vivoes />} />
        <Route path="/addadmins" element={<AddAdmin />} />
        <Route path="/showadmins" element={<ShowAdmin />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </BrowserRouter>
  );
};
