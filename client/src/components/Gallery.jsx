
import {useEffect,useState} from "react";
import api from "../utils/api";

export default function Gallery(){

 const [images,setImages]=useState([]);

 useEffect(()=>{
  api.get("/gallery").then(res=>setImages(res.data));
 },[]);

 return(
  <div>
   <h2>Gallery</h2>
   {images.map(img=>(
    <img key={img._id} src={"http://localhost:5000/"+img.imageUrl} width="200"/>
   ))}
  </div>
 )
}
