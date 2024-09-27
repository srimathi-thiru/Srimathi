
import React ,{ useEffect } from 'react';
import  Axios  from 'axios';
const GetDemo = () => {
    useEffect(()=>{
       Axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => console.log(response.data))
      
    })
  return (
    <>
    <h1>Welcome to Axios</h1>
    </>
  )
}

export default GetDemo;
