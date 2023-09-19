import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import "./App.css";
const App = () => {
  const [data, setData] = useState([]);

  const updateData = (newItem) => {
    setData((prevData) => {
      console.log("data is", [...prevData, newItem]); // Logging the updated value of 'data'
      return [...prevData, newItem];
    });
  };
  return (
    <>
      <h1 className="todo-title">Task-Hub</h1>
      <Form data={data} updateData={updateData} />
      {/* <Card/> */}
    </>
  );
};

export default App;
