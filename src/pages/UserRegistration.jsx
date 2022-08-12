import { useState } from "react";

function UserRegistration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Congratulations ${firstName} ${lastName} for Registering for the event!!!`
    );

    fetch("https://versed-defiant-prune.glitch.me/users", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      id="userLoginForm"
      className="d-flex flex-column mx-auto"
    >
      <div id="eventTitle">
        <h3>EVENT REGISTRATION FORM</h3>
      </div>
      <div id="innerForm" className="d-flex justify-content-around">
        <div id="leftSideOfTheForm">
          <h3 style={{ fontStyle: "italic"}}>PYNTE SEG MODELS</h3>
          <img style={{borderRadius:'50%', width:'150px' }}
            src="https://thumbs2.imgbox.com/32/e6/wZl634pA_t.png"
            alt="Hello"
          />
          <h3>MISSION:</h3>
          <ul>
            <li>Identifying and developing lantin skills to provide<br></br> equal
              opportunities in the art industry
            </li>
          </ul>
          <h3>VISION:</h3>
          <ul>
            <li>Bringing back dignity, respect and financial independence<br></br> 
              in the world of entertainment
            </li>
          </ul>
          <div className="d-flex">
          <img style={{width:'100px'}} src="https://kenyanmagazine.co.ke/wp-content/uploads/2021/02/images-6.jpeg" 
          alt="mpesa logo" />
          <h5 style={{backgroundColor:'#fff', padding:"10px"}} className="align-self-center">:  0741637620</h5>
          </div>
          
        </div>
        <div id="rightSideOfTheForm" className="d-flex flex-column justify-content-center">
          <h2>Register Now</h2>
          <h5>Enter your Information:</h5>
          <div id="names" className="d-flex">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div id="emailAndPhone" className="d-flex">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="07xxxxxxxxxx"
              pattern="[0-9]{10}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <label>Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-danger mt-6 userButton">
        Register
      </button>
    </form>
  );
}

export default UserRegistration;
