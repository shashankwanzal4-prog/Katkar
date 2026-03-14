
import {useState} from "react";
import axios from "axios";

export default function Booking(){
 const [name,setName]=useState("");
 const submit=async()=>{
   await axios.post("http://localhost:5000/api/bookings",{name});
   alert("Booking sent");
 }
 return(
  <div className="p-10">
   <h1 className="text-2xl">Book Event</h1>
   <input className="border p-2" onChange={e=>setName(e.target.value)} placeholder="Name"/>
   <button className="bg-black text-white p-2 ml-2" onClick={submit}>Submit</button>
  </div>
 )
}
