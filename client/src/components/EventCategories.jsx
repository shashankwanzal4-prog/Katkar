
const events=["Wedding","Corporate","Birthday","Festival","Engagement"];

export default function EventCategories(){
 return(
  <div>
   <h2>Event Categories</h2>
   {events.map(e=><div key={e}>{e}</div>)}
  </div>
 )
}
