import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PostReactIniciantes from "./Pages/PostReactIniciantes";

function Router() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-para-iniciantes" element={<PostReactIniciantes />} />
      </Routes>
  )
}

export default Router;
