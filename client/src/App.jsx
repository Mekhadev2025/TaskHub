import React, { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";
const App = () => {
  const [data, setData] = useState([]);

  const updateData = (newItem) => {

    setData((prevData) => [...prevData, newItem]);
  };
  return (
    <>
      <h1 className="todo-title">Task-Hub</h1>
       <Form data={data} updateData={updateData}/>
       {/* <Card/> */}
    </>
  );
};

export default App;
