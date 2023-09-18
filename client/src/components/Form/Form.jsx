import React,{useState} from 'react'
import "../Form/Form.css"
const Form = () => {

    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
      console.log(e);
      e.preventDefault();
      console.log("Heyy", task);
      setTask("")
    };
  
  return (
    <div>
      <form className="todoInput-form" onSubmit={handleSubmit}>
        <input
          className="todoInput"
          type="text"
          name="task"
          placeholder="Add task"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
        />
        <button type="submit" className="input-btn">
          Add
        </button>
      </form>
     
    </div>
  )
}

export default Form
