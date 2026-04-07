import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, [id]);

  if (!student) return <h2>Loading...</h2>;

  return (
     <div className="details-box">
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>City: {student.address.city}</p>
      <p>Company: {student.company.name}</p>
    </div>
  );
};