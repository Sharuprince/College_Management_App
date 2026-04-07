import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Student = ()=>{
  const[students,setStudents] = useState([]);
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>{
        setStudents(data)
        setLoading(false)
       })
       
  },[])
  if(loading)return <h2> Loading....!</h2>
  return (
    <div>
      <h1>Home Page</h1>
      {students.map((user)=>(
        <div key={user.id} className="card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
           <Link to={`${user.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}