import React, { useState } from "react";
import SignIn from "../src/Pages/SignIn/SignIn"
import Main from "../src/Pages/Main/Main"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
   const [signed,useSigned]=useState(false)
  return (
    <>
    <Navbar/>
      <h1 className="todo-title">Welcome to TaskHub!!!!</h1>
      {
        signed ? <Main/> : <SignIn/>
      }
      
     
    </>
  );
};

export default App;
