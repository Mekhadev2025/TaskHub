import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card"; // Corrected import
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  const updateData = (newItem) => {
    setData((prevData) => {
      console.log("data is", [...prevData, newItem]);
      return [...prevData, newItem];
    });
  };

  return (
    <>
      <h1 className="todo-title">Task-Hub</h1>
      <Form data={data} updateData={updateData} />
      {
        data.map((item) => (
          // Use parentheses to wrap the Card component
          <Card key={item} taskName={item} />
        ))
      }
    </>
  );
};

export default App;
