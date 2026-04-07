import { Outlet, Link } from "react-router-dom";

export const College = () => {
  return (
    <div className="college">
      <h1>College Page</h1>

      <Link to="student">Student</Link> |{" "}
      <Link to="department">Department</Link> |{" "}
      <Link to="details">Details</Link>

      <Outlet />
    </div>
  );
};