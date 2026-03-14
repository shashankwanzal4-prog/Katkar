import {useState} from "react";

export default function Chatbot(){

const[msg,setMsg]=useState("");

function ask(){
alert("AI Event Suggestion: Wedding event for 200 guests approx ₹2L");
}

return(
<div style={{position:"fixed",bottom:"20px",right:"20px",background:"#fff",padding:"10px"}}>
<input placeholder="Ask event question"
onChange={(e)=>setMsg(e.target.value)}/>
<button onClick={ask}>Ask AI</button>
</div>
)

}
