import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://brainy-quill-son.glitch.me/users")
      .then((reponse) => reponse.json())
      .then((data) => setUsers(data));
  }, [users]);

  console.log(users);
  return (
    <div id="adminDashboard" className="d-flex justify-content-between">
      <div id="leftAdminPanel">
        <div className="d-flex flex-column">
          <img
            src="https://images2.imgbox.com/70/94/FKi9BS1Y_o.png"
            id="image"
            alt="Admin Logo"
          />
          <h1 style={{ color: "#fff", margin: "auto", marginBottom: "30px" }}>
            Admin Dashboard
          </h1>
          <Link
            style={{
              fontSize: "1.3rem",
              margin: "auto",
              textDecoration: "none",
            }}
            to="/adminDashboard"
          >
            Members
          </Link>
        </div>
      </div>
      <div id="membersAdminPanel">
        <div id="membersContainer">
          <h3 style={{ padding: "10px" }}>Members</h3>
          <table className="table">
            <thead>
              <tr>
                <th>No:</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
