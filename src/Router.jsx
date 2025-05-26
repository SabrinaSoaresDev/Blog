import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Artigos from "./Pages/Artigos";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";

function Router() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
  )
}

export default Router;
