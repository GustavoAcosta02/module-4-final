
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";
import AuthDetails from "./AuthDetails";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDetailsView, setIsDetailsView] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      {isDetailsView ? (
        <AuthDetails />
      ) : (
        <form onSubmit={signIn}>
          <h1>Log In to your Account</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Log in</button>
        </form>
      )}
      <button onClick={() => setIsDetailsView(!isDetailsView)}>
        {isDetailsView ? "Back to Login" : "View Details"}
      </button>
    </div>
  );
}

export default Login;
