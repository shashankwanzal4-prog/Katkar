
import {useState} from "react";
import api from "../utils/api";

export default function Booking(){

 const [form,setForm]=useState({});

 const submit=async()=>{
  await api.post("/bookings",form);
  alert("Booking Submitted");
 }

 return(
  <div>
   <h1>Book Event</h1>

   <input placeholder="Name"
   onChange={e=>setForm({...form,name:e.target.value})}/>

   <input placeholder="Email"
   onChange={e=>setForm({...form,email:e.target.value})}/>

   <select onChange={e=>setForm({...form,eventType:e.target.value})}>
    <option>Wedding</option>
    <option>Corporate</option>
    <option>Birthday</option>
   </select>

   <button onClick={submit}>Submit</button>
  </div>
 )
}
