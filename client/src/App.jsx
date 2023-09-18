 import React from 'react'
 import "./App.css"
 const App = () => {
   return (
     <>
       <h1 className='todo-title'>Task-Hub</h1>
      <form className='todoInput-form'>

        <input  className="todoInput"type="text" name="task"  placeholder="Add task"/>
        <button type="submit" className="input-btn">Add</button>
      </form>


  {/* <ul className='lists'>
    <li className='liItem'></li>
  </ul> */}
       
     </>
   )
 }
 
 export default App
 