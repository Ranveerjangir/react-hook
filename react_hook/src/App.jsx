import React from 'react'
import { useRef } from 'react'
import FormComponent from './FormComponent';
function App() {
  const name = useRef()
  const email = useRef()

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name.current.getValue(), console.log(email.current.getValue()))
    name.current.getfocus()
    name.current.setValues("")
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormComponent ref={name} />
        <button type="Submit">Submit</button>
//       </form>
{submittedData && (
  <div>
    <h2>Submitted Data:</h2>
    <p>First Name: {submittedData.firstName}</p>
    <p>Last Name: {submittedData.lastName}</p>
    <p>Gender: {submittedData.gender}</p>
    <p>Email: {submittedData.email}</p>
    <p>Phone Number: {submittedData.phone}</p>
    <p>State: {submittedData.state}</p>
  </div>
)}
//     </>
  )
}

export default App


























//  React, { useRef, useState } from 'react';

// function App() {
//   cons
// importt [submittedData, setSubmittedData] = useState(null);
//   const firstNameInputRef = useRef(null);
//   const lastNameInputRef = useRef(null);
//   const genderInputRef = useRef(null);
//   const emailInputRef = useRef(null);
//   const phoneInputRef = useRef(null);

//   const handleSubmit = (e) => { e.preventDefault();

//     const firstName = firstNameInputRef.current.value;
//     const lastName = lastNameInputRef.current.value;
//     const gender = genderInputRef.current.value;
//     const email = emailInputRef.current.value;
//     const phone = phoneInputRef.current.value;

//     const formData = {
//       firstName,lastName,gender,email,phone,
//     };


//     setSubmittedData(formData);
//   };

//   return (
//     <div className='form'>
//       <h2>My Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input type="text" id="firstName" ref={firstNameInputRef} required />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name:</label>
//           <input type="text" id="lastName" ref={lastNameInputRef} required />
//         </div>
//         <div>
//           <label htmlFor="gender">Gender:</label>
//           <select id="gender" ref={genderInputRef} required>
//           <option value="select">Select</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="email -Id">Email:</label>
//           <input type="email" id="email" ref={emailInputRef} required />
//         </div>
//         <div>
//           <label htmlFor="phone">Phone Number:</label>
//           <input type="tel" id="phone" ref={phoneInputRef} required />
//         </div>
//         <div>
//         <div>
//           <label htmlFor="State">State</label>
//           <input type="State" id="State" ref={phoneInputRef} required />
//         </div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>

//       {submittedData && (
//         <div>
//           <h2>Submitted Data:</h2>
//           <p>First Name: {submittedData.firstName}</p>
//           <p>Last Name: {submittedData.lastName}</p>
//           <p>Gender: {submittedData.gender}</p>
//           <p>Email: {submittedData.email}</p>
//           <p>Phone Number: {submittedData.phone}</p>
//           <p>State: {submittedData.state}</p>
//         </div>
//       )}
//     </div>

//   );
// }

// export default App;
