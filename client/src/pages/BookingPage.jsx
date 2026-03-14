import axios from "axios"
import API from "../utils/api"
import { useState } from "react"

export default function BookingPage(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")

async function submitBooking(){

await axios.post(`${API}/booking`,{
name,
email
})

alert("Booking submitted!")

}

return(

<div>

<h2>Book Your Event</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<button onClick={submitBooking}>
Submit Booking
</button>

</div>

)

}
