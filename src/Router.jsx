import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Artigos from "./Pages/Artigos";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
<<<<<<< HEAD
import Forum from "./Pages/Forum";
=======
>>>>>>> 5d32bc1e76cee27699901aef832400fa43b35e62

function Router() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
<<<<<<< HEAD
        <Route path="/forum" element={<Forum />} />
=======
>>>>>>> 5d32bc1e76cee27699901aef832400fa43b35e62
      </Routes>
  )
}

export default Router;
