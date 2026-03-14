
import {useEffect,useState} from "react";
import api from "../utils/api";

export default function Testimonials(){

 const [data,setData]=useState([]);

 useEffect(()=>{
  api.get("/testimonials").then(res=>setData(res.data));
 },[]);

 return(
  <div>
   <h2>Testimonials</h2>
   {data.map(t=>(
    <div key={t._id}>
     <b>{t.name}</b>
     <p>{t.review}</p>
    </div>
   ))}
  </div>
 )
}
