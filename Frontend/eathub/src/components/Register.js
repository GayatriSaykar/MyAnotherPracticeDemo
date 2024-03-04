import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CustRegister() {

  
const init = {
  cust_name: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  email: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  contactno: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  gender: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  cust_address: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  username: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  password: {
    value: '',
    valid: false,
    touched: false,
    error: '',
  },
  formValid: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      const { key, value, touched, valid, error, formValid } = action.data;
      return { ...state, [key]: { value, touched, valid, error }, formValid };
    case "updateGender":
      return { ...state, gender: { value: action.payload, touched: true, valid: !!action.payload, error: '' }, formValid: !!action.payload && state.formValid };
      
    default:
        return state;
     
  }
};


  let navigate = useNavigate();
  const [customer, dispatch] = useReducer(reducer, init);
  const [gender, setGender] = useState("");

  const validateData = (key, val) => {
    let valid = true;
    let error = "";

    switch (key) {
      case "cust_name":
        const cust_namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(!cust_namePattern.test(val))
        {
           valid = false;
           error = "Customer name should be firstname and lastname"
        }
        break;
      case "email":
        const emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if(!emailPattern.test(val))
        {
           valid = false;
           error = "Email should contain special character and dot(.)"
        }
        break;
      case "contactno":
        const contactnoPattern = /^\d{10}$/;
        if(!contactnoPattern.test(val))
        {
           valid = false;
           error = "Contact should contain 10 digits only"
        }
        break;

      case "cust_address":
        const cust_addPattern = /^[0-9A-Za-z\s.,'-]+$/;
        if(!cust_addPattern.test(val))
        {
           valid = false;
           error = "Address should be required"
        }
        break;
      case "username":
        const usernamepattern = /^[0-9A-Za-z]{6,16}$/;
        if(!usernamepattern.test(val))
        {
           valid = false;
           error = "Username contains letters and digits and at least 6 char"
        }
        break;
      case "password":
        const passwordpattern =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/;
          if(!passwordpattern.test(val))
          {
             valid = false;
             error = "Password enter a valid password at least one digit,lowercase,uppercase,special char"
          }
        break;
      default:
    }
    return { valid:valid, error:error };
  };
  const handleChange = (key, value) => {

    if (key === "gender") {
      dispatch({ type: "updateGender", payload: value });
    } else {
      const { valid, error } = validateData(key, value);
  
      dispatch({
        type: "update",
        data: { key, value, touched: true, valid, error },
      });
    }
  };

  const isFormValid = () => {
    for (let key in customer) {
      if (key !== "formValid" && !customer[key].valid) {
        return false;
      }
    }
    return true;
  };
    
  const submitData = (e) => {
    //alert("ok");
    e.preventDefault();
    console.log(JSON.stringify(customer));
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        cust_name: customer.cust_name.value,
        email: customer.email.value,
        contactno: customer.contactno.value,
        gender: gender,
        cust_address: customer.cust_address.value,
        username: customer.username.value,
        password: customer.password.value,
      }),
    };
    console.log("Request Payload:", reqOptions.body);
    fetch("http://localhost:8080/custregister", reqOptions)
      .then((response) => {
        if (response.ok) {
          // Successful registration
          //alert("Customer registered successfully!");
          dispatch({ type: "reset" }); // Reset the form after successful registration

          // Navigate to the login page
          navigate("/login");
        } else {
          // Registration failed
          response.text().then((errorcustomerage) => {
            console.error("Registration failed. Error:", errorcustomerage);
            //alert("Registration failed. Please try again.");
          });
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        navigate("/custregister");
        //alert("An error occurred during registration. Please try again.");
      });
  };

  return (
    <div
      className="container mt-5 "
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Image})`,
        backgroundSize: "contain",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="row justify-content-center ">
        <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
          <form>
            <h2 style={{ textAlign: "center" }}>Registration</h2>
            <br /> 
            <label className="form-label" style={{ float: "left" }}>
                Name
             </label>
            <div className="mb-3">
            <input type='text' className="form-control opacity-80" placeholder='Name' id="cust_name" autoComplete="off" name="cust_name" 
                    value={customer.cust_name.value}
                    onChange={(e)=>{handleChange("cust_name",e.target.value)}} 
                    onBlur={(e)=>{handleChange("cust_name",e.target.value)}}
                    />

                  <br/>

                    <div style={{ display: customer.cust_name.touched && !customer.cust_name.valid  ?"block":"none",color: 'red' }}>
                    { customer.cust_name.error}
                    </div>
            </div>
            <label className="form-label" style={{ float: "left" }}>
                Email
             </label>
            <div className="mb3">
            <input type='text' className="form-control opacity-80" placeholder='Email' id="email" autoComplete="off" name="email" 
                    value={customer.email.value}
                    onChange={(e)=>{handleChange("email",e.target.value)}} 
                    onBlur={(e)=>{handleChange("email",e.target.value)}}
                    />
                        <br/>
                 

                    <div style={{ display: customer.email.touched && !customer.email.valid  ?"block":"none",color: 'red' }}>
                    { customer.email.error}
                    </div>
              </div>

              <div className="mb-3">
              <label className="form-label" style={{ float: "left" }}>
                Contact
             </label>
              <input type='text' className="form-control opacity-80" placeholder='Contact' id="contactno" autoComplete="off" name="contactno" 
                    value={customer.contactno.value}
                    onChange={(e)=>{handleChange("contactno",e.target.value)}} 
                    onBlur={(e)=>{handleChange("contactno",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: customer.contactno.touched && !customer.contactno.valid  ?"block":"none",color: 'red' }}>
                    { customer.contactno.error}
                    </div>
              </div>
              <div className="mb-3">
             
    <label className="form-label" style={{ float: "left" }}>   
    Gender
    <select
      value={gender}
      onChange={(e) => {
        setGender(e.target.value);
        handleChange("gender", e.target.value);
      }}
    >
      <option value="" disabled>Select One</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </label>

<br/>
  <div style={{ display: customer.gender.touched && !customer.gender.valid ? "block" : "none", color: 'red' }}>
    {customer.gender.error}
  </div>
              </div>
            <label className="form-label" style={{ float: "left" }}>
                Address
             </label>
            <div className="mb-3">
            
            <input type='text' className="form-control opacity-80" placeholder='Address' id="cust_address" autoComplete="off" name="cust_address" 
                    value={customer.cust_address.value}
                    onChange={(e)=>{handleChange("cust_address",e.target.value)}} 
                    onBlur={(e)=>{handleChange("cust_address",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: customer.cust_address.touched && !customer.cust_address.valid  ?"block":"none",color: 'red' }}>
                    { customer.cust_address.error}
                    </div>
            </div>
            <label className="form-label" style={{ float: "left" }}>
                Username
             </label>
            <div className="mb-3">
            
            <input type='text' className="form-control opacity-80" placeholder='Username' id="username" autoComplete="off" name="username" 
                    value={customer.username.value}
                    onChange={(e)=>{handleChange("username",e.target.value)}} 
                    onBlur={(e)=>{handleChange("username",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: customer.username.touched && !customer.username.valid  ?"block":"none",color: 'red' }}>
                    { customer.username.error}
                    </div>
            </div>
            <label className="form-label" style={{ float: "left" }}>
                Password
             </label>
            <div className="mb-3">
            
            <input type='password' className="form-control opacity-80" placeholder='Password' id="password" autoComplete="off" name="password" 
                    value={customer.password.value}
                    onChange={(e)=>{handleChange("password",e.target.value)}} 
                    onBlur={(e)=>{handleChange("password",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: customer.password.touched && !customer.password.valid  ?"block":"none",color: 'red' }}>
                    { customer.password.error}
                    </div>
            </div>
            <br />
            <div className="d-grid">
              <button
               type="submit"
               className="btn btn-success"
               disabled={!isFormValid()}
               onClick={(e) => submitData(e)}
             >
            
                Save
              </button>
            </div>
            <div className="mt-3">
                <p className="mb-0">
                  Already Registered? <Link to="/login"  className="link-success">Login</Link>
                </p>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}















// import { useState, useReducer } from "react";
// import { useNavigate } from "react-router-dom";


// const init = {
//   cust_name: {
//     value: "",
//     valid: false,
//     touched: false,
//     error: "Name is required",
//   },
//   email: {
//     value: "",
//     valid: false,
//     touched: false,
//     error: "Email is required",
//   },
//   contactno: {
//     value: "",
//     valid: false,
//     touched: false,
//     error: "Contact is required",
//   },
//   gender: {
//     value: "",
//     valid: false,
//     touched: false,
//     error: "Gender is required",
//   },
//   cust_address: {
//     value: "",
//     valid: false,
//     touched: false,
//     error: "Address is required",
//   },
//   username: {
//     value: "",
//     valid: false,
//     touched: false,
//     error: "Username is required",
//   },
//   password: {
//     value: "",
//     valid: false,
//     touched: false,
//     error: "Password is required",
//   },
//   formValid: false,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "update":
//       const { key, value, touched, valid, error, formValid } = action.data;
//       return { ...state, [key]: { value, touched, valid, error }, formValid };
//     default:
//       return state;
//   }
// };

// export default function CustRegister() {
//   let navigate = useNavigate();
//   const [customer, dispatch] = useReducer(reducer, init);
//   const [gender, setGender] = useState(""); // Set a default value


//   const validateData = (key, val) => {
//     let valid = true;
//     let error = "";

//     switch (key) {
//       case "cust_name":
//         const cust_namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
//         valid = cust_namePattern.test(val);
//         error = "Please enter valid";
//         break;
//       case "email":
//         const emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
//         valid = emailPattern.test(val);
//         error = "Invalid email address";
//         break;
//       case "contactno":
//         const contactnoPattern = /^\d{10}$/;
//         valid = contactnoPattern.test(val);
//         error = "Please enter valid contactno";
//         break;
//       case "cust_address":
//         const cust_addPattern = /^[0-9A-Za-z\s.,'-]+$/;
//         valid = cust_addPattern.test(val);
//         error = "Please enter valid";
//         break;
//       case "username":
//         const usernamepattern = /^[0-9A-Za-z]{6,16}$/;
//         valid = usernamepattern.test(val);
//         error = "Please valid username";
//         break;
//       case "password":
//         const passwordpattern =
//           /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/;
//         valid = passwordpattern.test(val);
//         error = "Please enter valid password";
//         break;
//       default:
//     }
//     return { valid, error };
//   };
//   const handleChange = (key, value) => {
//     const { valid, error } = validateData(key, value);
//     let formValid = true;
//     for (let k in customer) {
//       if (customer[k].valid === false || customer[k].touched === false) {
//         formValid = false;
//         break;
//       }
//   //   let formValid = valid && customer[key].touched;

//   // // Check if all other fields are valid and touched
//   // for (let k in customer) {
//   //   if (k !== key && (customer[k].valid === false || customer[k].touched === false)) {
//   //     formValid = false;
//   //     break;
//   //   }
//     }
    
//     dispatch({
//       type: "update",
//       data: { key, value, touched: true, valid, error, formValid },
//     });
//   };

//   const onOptionChange = (e) => {
//     setGender(e.target.value);
//   };

//   const submitData = (e) => {
//     //alert("ok");
//     e.preventDefault();
//     console.log(JSON.stringify(customer));
//     const reqOptions = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         cust_name: customer.cust_name.value,
//         email: customer.email.value,
//         contactno: customer.contactno.value,
//         gender: gender,
//         cust_address: customer.cust_address.value,
//         username: customer.username.value,
//         password: customer.password.value,
//       }),
//     };
//     console.log("Request Payload:", reqOptions.body);
//     fetch("http://localhost:8080/custregister", reqOptions)
//       .then((response) => {
//         if (response.ok) {
//           // Successful registration
//           alert("Customer registered successfully!");
//           dispatch({ type: "reset" }); // Reset the form after successful registration

//           // Navigate to the login page
//           navigate("/login");
//         } else {
//           // Registration failed
//           response.text().then((errorMessage) => {
//             console.error("Registration failed. Error:", errorMessage);
//             alert("Registration failed. Please try again.");
//           });
//         }
//       })
//       .catch((error) => {
//         console.error("Error during registration:", error);
//         alert("An error occurred during registration. Please try again.");
//       });
//   };

//   return (
//       <div className="row justify-content-center ">
//         <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
//           <form>
//             <h2 style={{ textAlign: "center" }}>Registration</h2>
//             <br />
//             <div className="mb-3">
//               <label className="form-label" style={{ float: "left" }}>
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className={`form-control opacity-50 form-control-sm ${
//                   customer.cust_name.touched && !customer.cust_name.valid
//                     ? "is-invalid"
//                     : ""
//                 }`}
//                 placeholder="Enter Name"
//                 value={customer.cust_name.value}
//                 onChange={(e) => handleChange("cust_name", e.target.value)}
//                 onBlur={(e) => handleChange("cust_name", e.target.value)}
//               />
//               {customer.cust_name.touched && !customer.cust_name.valid && (
//                 <div className="invalid-feedback">
//                   {customer.cust_name.error}
//                 </div>
//               )}
//             </div>
//             <div className="mb-3">
//               <label className="form-label" style={{ float: "left" }}>
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className={`form-control opacity-50 form-control-sm ${
//                   customer.email.touched && !customer.email.valid
//                     ? "is-invalid"
//                     : ""
//                 }`}
//                 placeholder="Enter Email"
//                 value={customer.email.value}
//                 onChange={(e) => handleChange("email", e.target.value)}
//                 onBlur={(e) => handleChange("email", e.target.value)}
//               />
//               {customer.email.touched && !customer.email.valid && (
//                 <div className="invalid-feedback">{customer.email.error}</div>
//               )}
//               </div>

//               <div className="mb-3">
//                 <label className="form-label" style={{ float: "left" }}>
//                   Contact No
//                 </label>
//                 <input
//                   type="text"
//                   className={`form-control opacity-50 form-control-sm ${
//                     customer.contactno.touched && !customer.contactno.valid
//                       ? "is-invalid"
//                       : ""
//                   }`}
//                   placeholder="Enter Contact"
//                   value={customer.contactno.value}
//                   onChange={(e) => handleChange("contactno", e.target.value)}
//                   onBlur={(e) => handleChange("contactno", e.target.value)}
//                 />
//                 {customer.contactno.touched && !customer.contactno.valid && (
//                   <div className="invalid-feedback">
//                     {customer.contactno.error}
//                   </div>
//                 )}
//               </div>
//               <div className="mb-3">
//                 <label className="form-label" style={{ float: "left" }}>
//                   Gender
//                 </label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   id="male"
//                   checked={gender === "Male"}
//                   onChange={onOptionChange}
//                   autoComplete="off"
//                 />
//                 Male &nbsp;&nbsp;
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   id="female"
//                   checked={gender === "Female"}
//                   onChange={onOptionChange}
//                 />
//                 Female &nbsp;&nbsp;
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Other"
//                   id="other"
//                   checked={gender === "Other"}
//                   onChange={onOptionChange}
//                 />
//                 Other
//               </div>
//             <div className="mb-3">
//               <label className="form-label" style={{ float: "left" }}>
//                 Address
//               </label>
//               <input
//                 type="text"
//                 className={`form-control opacity-50 form-control-sm ${
//                   customer.cust_address.touched && !customer.cust_address.valid
//                     ? "is-invalid"
//                     : ""
//                 }`}
//                 placeholder="Enter Address"
//                 value={customer.cust_address.value}
//                 onChange={(e) => handleChange("cust_address", e.target.value)}
//                 onBlur={(e) => handleChange("cust_address", e.target.value)}
//               />
//               {customer.cust_address.touched &&
//                 !customer.cust_address.valid && (
//                   <div className="invalid-feedback">
//                     {customer.cust_address.error}
//                   </div>
//                 )}
//             </div>
//             <div className="mb-3">
//               <label className="form-label" style={{ float: "left" }}>
//                 Username
//               </label>
//               <input
//                 type="text"
//                 className={`form-control opacity-50 form-control-sm ${
//                   customer.username.touched && !customer.username.valid
//                     ? "is-invalid"
//                     : ""
//                 }`}
//                 placeholder="Enter Username"
//                 value={customer.username.value}
//                 onChange={(e) => handleChange("username", e.target.value)}
//                 onBlur={(e) => handleChange("username", e.target.value)}
//               />
//               {customer.username.touched && !customer.username.valid && (
//                 <div className="invalid-feedback">
//                   {customer.username.error}
//                 </div>
//               )}
//             </div>
//             <div className="mb-3">
//               <label className="form-label" style={{ float: "left" }}>
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className={`form-control opacity-50 form-control-sm ${
//                   customer.password.touched && !customer.password.valid
//                     ? "is-invalid"
//                     : ""
//                 }`}
//                 placeholder="Enter Password"
//                 value={customer.password.value}
//                 onChange={(e) => handleChange("password", e.target.value)}
//                 onBlur={(e) => handleChange("password", e.target.value)}
//               />
//               {customer.password.touched && !customer.password.valid && (
//                 <div className="invalid-feedback">
//                   {customer.password.error}
//                 </div>
//               )}
//             </div>
//             <br />
//             <div className="d-grid">
//               <button
//                 type="submit"
//                 className="btn btn-success"
//                 disabled={!customer.formValid}
//                 onClick={(e) => submitData(e)}
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//         </div>
//   );
// }
