import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Poyects from "../containers/Poyects";
import Home from "../containers/Home";
import Contacts from "../containers/Contacts";

export default function RouteMachine() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyect" element={<Poyects />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
