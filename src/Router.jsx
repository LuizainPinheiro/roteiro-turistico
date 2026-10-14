import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Sobre from "./pages/Sobre";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}