import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div id="landingPage" className="d-flex justify-content-between">
      <div id="content" className="d-flex flex-column">
        <p>Feb 30 - Mar 1, 2020 Nicosia, Cyprus</p>
        <h1>Pynte Models International</h1>
        <h2>In Eastern Africa</h2>
        <Link
          to="/userRegistration"
          className="btn btn-primary userButton mx-auto"
        >
          Proceed
        </Link>
        <div className="d-flex justify-content-around ">
          <a
            style={{ color: "red", fontSize: "3.5rem" }}
            href="https://www.youtube.com/"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            style={{ color: "blue", fontSize: "3.5rem" }}
            href="https://www.youtube.com/"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            style={{ color: "#833AB4", fontSize: "3.5rem" }}
            href="https://www.instagram.com/"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            style={{ color: "#fff", fontSize: "3.5rem" }}
            href="mailto:info@pynteseg.com"
          >
            <i className="far fa-envelope"></i>
          </a>
        </div>
        <span>
          <i className="fas fa-globe-americas"></i> Moi Avenue Kashmir building
          opposite KCB bank kilindini plaza
        </span>
        <span>
          <i className="fas fa-inbox-in"></i> 43366-80100 Mombasa
        </span>
      </div>
      <div id="bannerImage">
      {/* <img
        className="img-fluid"
        src="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?w=2000&t=st=1660257769~exp=1660258369~hmac=5de65fa77c6bb7a8921e3295d9fc2ce7e95da7189e02a5dae23543daeed8fcb0"
        alt="freepik"
      /> */}
      </div>
      
      </div>
      
  );
}

export default LandingPage;
