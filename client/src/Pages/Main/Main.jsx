import React,{useState,useeffect}from 'react'
import Form from '../../components/Form/Form';
import Card from '../../components/Card/Card';
const Main = () => {
    const [data, setData] = useState([]);

    const updateData = (newItem) => {
      setData((prevData) => {
        console.log("data is", [...prevData, newItem]);
        return [...prevData, newItem];
      });
    };
  
  
  return (
    <div>
      <Form data={data} updateData={updateData} />
      {
        data.map((item) => (
          // Use parentheses to wrap the Card component
          <Card key={item} taskName={item} />
        ))
      }
    </div>
  )
}

export default Main
