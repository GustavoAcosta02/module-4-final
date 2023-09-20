// // Registration.js

// import React, { useState } from "react";

// function Registration() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     verifyPassword: "",
//   });

//   const [passwordMatchError, setPasswordMatchError] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.verifyPassword) {
//       setPasswordMatchError(true);
//       return;
//     }

//     setPasswordMatchError(false);
    
//   };

//   return (
//     <div>
//       <h2>User Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             minLength="8"
//             required
//           />
//         </div>
//         <div>
//           <label>Verify Password:</label>
//           <input
//             type="password"
//             name="verifyPassword"
//             value={formData.verifyPassword}
//             onChange={handleChange}
//             minLength="8"
//             required
//           />
//         </div>
//         {passwordMatchError && (
//           <p style={{ color: "red" }}>Passwords do not match.</p>
//         )}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

export default Registration;

