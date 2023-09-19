import React, { useState } from "react";
import axios from "axios";
import "../Form/Form.css";

const Form = (props) => {
  const [taskName, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/add", { taskName }) // Send taskName as an object
      .then((response) => {

        console.log("Response:", response.data);
        props.updateData(taskName);
      })
      .catch((error) => {

        console.error("Error:", error);
      });
      props.updateData(taskName)
    setTask("");
  };

  return (
    <div>
      <form className="todoInput-form" onSubmit={handleSubmit}>
        <input
          className="todoInput"
          type="text"
          name="task"
          placeholder="Add task"
          value={taskName}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="input-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
