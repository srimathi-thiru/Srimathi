import React,{useState} from 'react';
import  Axios  from 'axios';

const DemoPostAxios= ()=> {
    const [name,setName]=useState('');
    const [userId,setUserId]=useState('');
    const addNew=()=>{
        Axios.put('https://jsonplaceholder.typicode.com/users/'+userId,{name:name})
        .then(res => console.log(res.data));
    }
  return (
    <>
    <h1>Post Demo</h1>
    <input type='text' value={userId} onChange={(e)=>setUserId(e.target.value)}/>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={addNew}>addNew</button>
    </>
  )
}

export default DemoPostAxios
