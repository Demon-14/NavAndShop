import React from "react";
import "./login.css";
import { data } from "jquery";
const LoginCard = () => {
  const [username, setUsername] = React.useState("");
  const [pwd, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [ConfirmPassword, setConfirmPassword] = React.useState("");
  const [match, setMatch] = React.useState(true);

  function handleClick(event) {
    if (pwd === ConfirmPassword) {
      console.log("hi");
      const dataTemp = { username, email, pwd };
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataTemp),
      });
      console.log(dataTemp);
      setMatch(true);
    } else {
      setMatch(false);
    }
  }

  return (
    <div className="cardLogin">
      <div className="center">
        <h1>Sign-up !</h1>
        <div className="txt_field">
          <label>Username</label>
          <br></br>
          <input
            type="text"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="txt_field">
          <label>Email</label>
          <br></br>
          <input
            type="text"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="txt_field">
          <label>Password</label>
          <br></br>
          <input
            type="password"
            required
            value={pwd}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="txt_field">
          <label>Confirm Password</label>
          <br></br>
          <input
            type="password"
            required
            value={ConfirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        {!match && <h4>passwords do not match</h4>}
        {/* <div className="pass">Forgot Password?</div> */}

        <button className="butt" onClick={handleClick}>
          Sign-up
        </button>
        {/* <div class="singup_link">Not a member? <a href="">Singup</a></div> */}
      </div>
    </div>
  );
};

export default LoginCard;
