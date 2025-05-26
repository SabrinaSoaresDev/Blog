import React from "react";
import { BrowserRouter } from "react-router-dom"
import Router from  './Router';
import { ThemeProvider } from './context/ThemeContext';

export default function App(){
  return(
    <BrowserRouter>
       <ThemeProvider>
          <Router/>
       </ThemeProvider>
    </BrowserRouter>
  )
}