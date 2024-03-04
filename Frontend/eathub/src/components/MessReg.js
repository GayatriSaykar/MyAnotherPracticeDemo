
// import { useState,useReducer,useEffect  } from "react";
// import { useNavigate } from 'react-router-dom';

// export default function MessReg()
// {

//   const init = {
//     mess_name: { value: '', valid: false, touched: false, error: '' },
//     owner_name: { value: '', valid: false, touched: false, error: '' },
//     email: { value: '', valid: false, touched: false, error: '' },
//     contactno: { value: '', valid: false, touched: false, error: '' },
//     city: { value: '', valid: false, touched: false, error: '' },
//     mess_address:{value: '', valid: false, touched: false, error: ''},
//     username:{value:'',valid:false,touched:false,error:''},
//     password:{value:'',valid:false,touched:false,error:''},
//     formValid: false,
//   };

  

// const reducer=(state,action)=>{
//     switch(action.type)
//     {
//     case 'update':
//         const { key, value, touched, valid, error, formValid } = action.data;
//         return { ...state, [key]: { value, touched, valid, error }, formValid };
//     default:
      
//     }
// }

//     let navigate=useNavigate();
//     const [mess, dispatch] = useReducer(reducer, init);

//     const [insertmsg,setInsertmsg]=useState("");
  
//     useEffect(() => {
//       const timer = setTimeout(() => {
//         if (insertmsg.includes('successful')) {
//           navigate("/login");
//         }
//       }, 2000); // Adjust the delay time as needed
  
//       return () => clearTimeout(timer);
//     }, [insertmsg, navigate]);


//     const validateData = (key, val) => {
//         let valid = true;
//         let error = '';
    
//         switch (key) {
//           case 'mess_name':
//             var mess_namePattern=/^[a-zA-Z]+$/;
//             if(!mess_namePattern.test(val))
//             {
//                valid = false;
//                error = "invalid mess name"
//             }
//             break;
         
//             case 'owner_name':
//               var owner_namePattern=/^[a-zA-Z]+ [a-zA-Z]+$/;
//               if(!owner_namePattern.test(val))
//               {
//                  valid = false;
//                  error = "invalid owner name"
//               }
//               break;
//             case 'email':
//               var emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
//               if(!emailPattern.test(val))
//               {
//                  valid = false;
//                  error = "invalid email id"
//               }
//               break;
//           case 'contactno':
//             var contactnoPattern=/^\d{10}$/;
//             if(!contactnoPattern.test(val))
//             {
//                valid = false;
//                error = "invalid contactno"
//             }
//             break;
         
//             case 'city':
//               var cityPattern=/^[A-Za-z]{3,15}$/;
//               if(!cityPattern.test(val))
//               {
//                  valid = false;
//                  error = "invalid city"
//               }
//               break;

//             case 'mess_address':
//               var mess_addPattern = /^[0-9A-Za-z\s.,'-]+$/;
//               if(!mess_addPattern.test(val))
//               {
//                  valid = false;
//                  error = "invalid mess address"
//               }
//               break;
//           case 'username':
//             var usernamepattern= /^[0-9A-Za-z]{6,16}$/;
//             if(!usernamepattern.test(val))
//             {
//                valid = false;
//                error = "invalid username"
//             }
//             break;
//           case 'password':
//             var passwordpattern =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/ ;
//             if(!passwordpattern.test(val))
//             {
//                valid = false;
//                error = "invalid password"
//             }
//             break;
//           default:
           
//         }
    
//         return { valid:valid, error:error };
//       };
    
//       const handleChange = (key, value) => {
//         const { valid, error } = validateData(key, value);
    
//         let formValid = true;
//         for (let k in mess) {
//           if (mess[k].valid === false) {
//             formValid = false;
//             break;
//           }
//         }
    
//         dispatch({ type: 'update', data: { key, value, touched: true, valid, error, formValid } });
//       };


    
//       const submitData = (e) => {
//         //alert("ok");
//         e.preventDefault();
//         console.log(JSON.stringify(mess));
//         const reqOptions = {
//             method:"POST",
//             headers: {'content-type':'application/json'},
//             body: JSON.stringify({
//                 mess_name: mess.mess_name.value,
//                 owner_name: mess.owner_name.value,
//                 email: mess.email.value,
//                 contactno: mess.contactno.value,
//                 city: mess.city.value,
//                 mess_address: mess.mess_address.value,
//                 username: mess.username.value,
//                 password: mess.password.value
//             })
//         }
//         fetch("http://localhost:8080/messregister", reqOptions)
//         .then((response) => {
//           if (response.ok) {
//             // Successful login
//            // alert('Registration successful!');
//            setInsertmsg('Registration successful!');
    
//             // Redirect or perform other actions on successful login
//             navigate("/login");
//           } else {
//             // Login failed
//             //alert('Registration Fail!! Please Try Again');
//             setInsertmsg('Registration failed! Please try again.');
//           }
//         })  
  
//       }

//     return(
//         <div className="container mt-5 img-fluid shadow-4 " style={{backgroundRepeat:"no-repeat" , backgroundImage: `url(${Image})`  }}>
//         <div className="row justify-content-center " >
//             <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
//             <form>
//             <h2 style={{textAlign:"center"}}>Registration</h2>
//             <br />
//             <div className="mb-3">
            
//             <label className="form-label" style={{ float: "left" }}>
//                 Mess Name
//               </label>
//             <input type='text' className="form-control opacity-50" placeholder='Mess Name' id="firstName" autoComplete="off" name="mess_name" 
//                     value={mess.mess_name.value}
//                     onChange={(e)=>{handleChange("mess_name",e.target.value)}} 
//                     onBlur={(e)=>{handleChange("mess_name",e.target.value)}}
//                     />

//                     <div style={{ display: mess.mess_name.touched && !mess.mess_name.valid  ?"block":"none",color: 'red' }}>
//                     { mess.mess_name.error}
//                     </div>
//             </div>
//             <div className="mb-3">
//             <label className="form-label" style={{ float: "left" }}>
//                 Owner Name
//               </label>
//             <input type='text' className="form-control opacity-50" placeholder='Owner Name' id="owner_name" autoComplete="off" name="owner_name" 
//                     value={mess.owner_name.value}
//                     onChange={(e)=>{handleChange("owner_name",e.target.value)}} 
//                     onBlur={(e)=>{handleChange("owner_name",e.target.value)}}
//                     />

                

//                     <div style={{ display: mess.owner_name.touched && !mess.owner_name.valid  ?"block":"none",color: 'red' }}>
//                     { mess.owner_name.error}
//                     </div>
//             </div>
//             <div className="mb3">
//             <label className="form-label" style={{ float: "left" }}>
//                 Email
//               </label>
//             <input type='text' className="form-control opacity-50" placeholder='Email' id="email" autoComplete="off" name="email" 
//                     value={mess.email.value}
//                     onChange={(e)=>{handleChange("email",e.target.value)}} 
//                     onBlur={(e)=>{handleChange("email",e.target.value)}}
//                     />

                    

//                     <div style={{ display: mess.email.touched && !mess.email.valid  ?"block":"none",color: 'red' }}>
//                     { mess.email.error}
//                     </div>
         
//           </div>
//             <div className="mb-3">
//             <label className="form-label" style={{ float: "left" }}>
//                 Contact No
//               </label>
//             <input type='text' className="form-control opacity-50" placeholder='Contact' id="contactno" autoComplete="off" name="contactno" 
//                     value={mess.contactno.value}
//                     onChange={(e)=>{handleChange("contactno",e.target.value)}} 
//                     onBlur={(e)=>{handleChange("contactno",e.target.value)}}
//                     />

                   

//                     <div style={{ display: mess.contactno.touched && !mess.contactno.valid  ?"block":"none",color: 'red' }}>
//                     { mess.contactno.error}
//                     </div>
//             </div>
          
//             <div className="mb-3">
//             <label className="form-label" style={{ float: "left" }}>
//                City
//               </label>
//             <input type='text' className="form-control opacity-50" placeholder='City' id="city" autoComplete="off" name="city" 
//                     value={mess.city.value}
//                     onChange={(e)=>{handleChange("city",e.target.value)}} 
//                     onBlur={(e)=>{handleChange("city",e.target.value)}}
//                     />

                    

//                     <div style={{ display: mess.city.touched && !mess.city.valid  ?"block":"none",color: 'red' }}>
//                     { mess.city.error}
//                     </div>
//             </div>
//             <div className="mb-3">
//             <label className="form-label" style={{ float: "left" }}>
//                 Mess Address
//               </label>
//             <input type='text' className="form-control opacity-50" placeholder='Address' id="mess_address" autoComplete="off" name="mess_address" 
//                     value={mess.mess_address.value}
//                     onChange={(e)=>{handleChange("mess_address",e.target.value)}} 
//                     onBlur={(e)=>{handleChange("mess_address",e.target.value)}}
//                     />

                    

//                     <div style={{ display: mess.mess_address.touched && !mess.mess_address.valid  ?"block":"none",color: 'red' }}>
//                     { mess.mess_address.error}
//                     </div>
//             </div>
//             <div className="mb-3">
//             <label className="form-label" style={{ float: "left" }}>
//                 Username
//               </label>
//             <input type='text' className="form-control opacity-50" placeholder='Username' id="username" autoComplete="off" name="username" 
//                     value={mess.username.value}
//                     onChange={(e)=>{handleChange("username",e.target.value)}} 
//                     onBlur={(e)=>{handleChange("username",e.target.value)}}
//                     />

        

//                     <div style={{ display: mess.username.touched && !mess.username.valid  ?"block":"none",color: 'red' }}>
//                     { mess.username.error}
//                     </div>
//             </div>
//             <div className="mb-3">
//             <label className="form-label" style={{ float: "left" }}>
//                 Password
//               </label>
//             <input type='password' className="form-control opacity-50" placeholder='Password' id="password" autoComplete="off" name="password" 
//                     value={mess.password.value}
//                     onChange={(e)=>{handleChange("password",e.target.value)}} 
//                     onBlur={(e)=>{handleChange("password",e.target.value)}}
//                     />

                    

//                     <div style={{ display: mess.password.touched && !mess.password.valid  ?"block":"none",color: 'red' }}>
//                     { mess.password.error}
//                     </div>
//             </div>
            
//             <br />
//             <div className="d-grid">
//             <button type="submit" className="btn btn-success" disabled={!mess.formValid} onClick={submitData}>Save</button>
//             </div>
//             </form>
//             {insertmsg && (
//             <div className={`alert ${insertmsg.includes('successful') ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
//               {insertmsg}
//             </div>
//           )}
//         </div>
//         </div>
//         </div>
//     )
// }

import { useState,useReducer } from "react";
// import Image from "../images/image2.jpg";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



export default function MessReg()
{

  const init = {
    mess_name: { value: '', valid: false, touched: false, error: '' },
    owner_name: { value: '', valid: false, touched: false, error: '' },
    email: { value: '', valid: false, touched: false, error: '' },
    contactno: { value: '', valid: false, touched: false, error: '' },
    city: { value: '', valid: false, touched: false, error: '' },
    area: { value: '', valid: false, touched: false, error: '' },
    mess_address:{value: '', valid: false, touched: false, error: ''},
    username:{value:'',valid:false,touched:false,error:''},
    password:{value:'',valid:false,touched:false,error:''},
    formValid: false,
  };

  

const reducer=(state,action)=>{
    switch(action.type)
    {
    case 'update':
        const { key, value, touched, valid, error, formValid } = action.data;
        return { ...state, [key]: { value, touched, valid, error }, formValid };
        case "updateCity":
          return { ...state, city: { value: action.payload, touched: true, valid: !!action.payload, error: '' }, formValid: !!action.payload && state.formValid };
        case "updateArea":
          return { ...state, area: { value: action.payload, touched: true, valid: !!action.payload, error: '' }, formValid: !!action.payload && state.formValid };  
        default:
            return state;
      
    }
}

    let navigate=useNavigate();
    const [mess, dispatch] = useReducer(reducer, init);
    const [msg,setMsg]=useState("");
    const [insertmsg,setInsertmsg]=useState("");
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");


    const validateData = (key, val) => {
        let valid = true;
        let error = '';
    
        switch (key) {
          case 'mess_name':
            var mess_namePattern=/^[a-zA-Z]+$/;
            if(!mess_namePattern.test(val))
            {
               valid = false;
               error = "Please enter a valid mess name"
            }
            break;
         
            case 'owner_name':
              var owner_namePattern=/^[a-zA-Z]+ [a-zA-Z]+$/;
              if(!owner_namePattern.test(val))
              {
                 valid = false;
                 error = "owner name should be firstname and lastname"
              }
              break;
            case 'email':
              var emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
              if(!emailPattern.test(val))
              {
                 valid = false;
                 error = "Email should contain special character and dot(.)"
              }
              break;
          case 'contactno':
            var contactnoPattern=/^\d{10}$/;
            if(!contactnoPattern.test(val))
            {
               valid = false;
               error = "Please enter a 10-digit numeric contact number."
            }
            break;
         
            

            case 'mess_address':
              var mess_addPattern = /^[0-9A-Za-z\s.,'-]+$/;
              if(!mess_addPattern.test(val))
              {
                 valid = false;
                 error = "Please enter a valid address"
              }
              break;
          case 'username':
            var usernamepattern= /^[0-9A-Za-z]{6,16}$/;
            if(!usernamepattern.test(val))
            {
               valid = false;
               error = "Username contains letters and digits and at least 6 char"
            }
            break;
          case 'password':
            var passwordpattern =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/ ;
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

        if (key === "city") {
          dispatch({ type: "updateCity", payload: value });
        }
        else if (key === 'area') {
          setArea(value);
          dispatch({ type: 'updateArea', payload: value });
        }
        else {
          const { valid, error } = validateData(key, value);
      
          dispatch({
            type: "update",
            data: { key, value, touched: true, valid, error },
          });
        }
      };
    
      const isFormValid = () => {
        for (let key in mess) {
          if (key !== "formValid" && !mess[key].valid) {
            return false;
          }
        }
        return true;
      };
    
      const submitData = (e) => {
        //alert("ok");
        e.preventDefault();
        console.log(JSON.stringify(mess));
        const reqOptions = {
            method:"POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                mess_name: mess.mess_name.value,
                owner_name: mess.owner_name.value,
                email: mess.email.value,
                contactno: mess.contactno.value,
                city: city,
                area:area,
                mess_address: mess.mess_address.value,
                username: mess.username.value,
                password: mess.password.value
            })
        }
        fetch("http://localhost:8080/messregister", reqOptions)
        .then((response) => {
          if (response.ok) {
            // Successful login
          //  alert('Registration successful!');
    
            // Redirect or perform other actions on successful login
            navigate("/login");
          } else {
            navigate("/messregister");
            // Login failed
          //  alert('Registration Fail!! Please Try Again');
          }
        })  
  
      }
//style={{backgroundRepeat:"no-repeat" , backgroundImage: `url(${Image})`  }}
    return(
        <div className="container mt-5 img-fluid shadow-4 " >
        <div className="row justify-content-center " >
            <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
            <form>
            <h2 style={{textAlign:"center"}}>Registration</h2>
            <br />
            <label className="form-label" style={{ float: "left" }}>
                Mess Name
             </label>
            <div className="mb-3">
            <input type='text' className="form-control opacity-500" placeholder='Mess Name' id="firstName" autoComplete="off" name="mess_name" 
                    value={mess.mess_name.value}
                    onChange={(e)=>{handleChange("mess_name",e.target.value)}} 
                    onBlur={(e)=>{handleChange("mess_name",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: mess.mess_name.touched && !mess.mess_name.valid  ?"block":"none",color: 'red' }}>
                    { mess.mess_name.error}
                    </div>
            </div>
            <label className="form-label" style={{ float: "left" }}>
                Owner Name
             </label>
            <div className="mb-3">
            <input type='text' className="form-control opacity-500" placeholder='Owner Name' id="owner_name" autoComplete="off" name="owner_name" 
                    value={mess.owner_name.value}
                    onChange={(e)=>{handleChange("owner_name",e.target.value)}} 
                    onBlur={(e)=>{handleChange("owner_name",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: mess.owner_name.touched && !mess.owner_name.valid  ?"block":"none",color: 'red' }}>
                    { mess.owner_name.error}
                    </div>
            </div>
            <label className="form-label" style={{ float: "left" }}>
                Email
             </label>
            <div className="mb3">
            <input type='text' className="form-control opacity-500" placeholder='Email' id="email" autoComplete="off" name="email" 
                    value={mess.email.value}
                    onChange={(e)=>{handleChange("email",e.target.value)}} 
                    onBlur={(e)=>{handleChange("email",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: mess.email.touched && !mess.email.valid  ?"block":"none",color: 'red' }}>
                    { mess.email.error}
                    </div>
         
          </div>
          <label className="form-label" style={{ float: "left" }}>
                Contact
             </label>
            <div className="mb-3">
            <input type='text' className="form-control opacity-500" placeholder='Contact' id="contactno" autoComplete="off" name="contactno" 
                    value={mess.contactno.value}
                    onChange={(e)=>{handleChange("contactno",e.target.value)}} 
                    onBlur={(e)=>{handleChange("contactno",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: mess.contactno.touched && !mess.contactno.valid  ?"block":"none",color: 'red' }}>
                    { mess.contactno.error}
                    </div>
            </div>
          
            <div className="mb-3">
                   
            <label className="form-label" style={{ float: "left" }}>     
    City
    <select
      value={city}
      onChange={(e) => {
        setCity(e.target.value);
        handleChange("city", e.target.value);
      }}
    >
      <option value="" disabled>Select One</option>
      <option value="pune">Pune</option>
    </select>
  </label>

  <div style={{ display: mess.city.touched && !mess.city.valid ? "block" : "none", color: 'red' }}>
    {mess.city.error}
  </div>
            </div>
            <div className="mb-3">
                   
                   <label>
            Area
            <select
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
                handleChange("area", e.target.value);
              }}
            >
              <option value="" disabled>Select One</option>
              <option value="Gokhalenagar">Gokhalenagar</option>
              <option value="Karvenagar">Karvenagar</option>
              <option value="Hadpsar">Hadpsar</option>
              <option value="Aundh">Aundh</option>
              <option value="Baner">Baner</option>
              <option value="Shivajinagar">Shivajinagar</option>
              <option value="Hinjewadi">Hinjewadi</option>
            </select>
          </label>
        
          <div style={{ display: mess.area.touched && !mess.area.valid ? "block" : "none", color: 'red' }}>
            {mess.area.error}
          </div>
                    </div>
            <div className="mb-3">
            <label className="form-label" style={{ float: "left" }}>
                Address
             </label>
            <input type='text' className="form-control opacity-500" placeholder='Address' id="mess_address" autoComplete="off" name="mess_address" 
                    value={mess.mess_address.value}
                    onChange={(e)=>{handleChange("mess_address",e.target.value)}} 
                    onBlur={(e)=>{handleChange("mess_address",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: mess.mess_address.touched && !mess.mess_address.valid  ?"block":"none",color: 'red' }}>
                    { mess.mess_address.error}
                    </div>
            </div>
            
            <label className="form-label" style={{ float: "left" }}>
                Username
             </label>
            <div className="mb-3">
            
            <input type='text' className="form-control opacity-500" placeholder='Username' id="username" autoComplete="off" name="username" 
                    value={mess.username.value}
                    onChange={(e)=>{handleChange("username",e.target.value)}} 
                    onBlur={(e)=>{handleChange("username",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: mess.username.touched && !mess.username.valid  ?"block":"none",color: 'red' }}>
                    { mess.username.error}
                    </div>
            </div>
            
            <label className="form-label" style={{ float: "left" }}>
                Password
             </label>
            <div className="mb-3">
            
            <input type='password' className="form-control opacity-500" placeholder='Password' id="password" autoComplete="off" name="password" 
                    value={mess.password.value}
                    onChange={(e)=>{handleChange("password",e.target.value)}} 
                    onBlur={(e)=>{handleChange("password",e.target.value)}}
                    />

                    <br/>

                    <div style={{ display: mess.password.touched && !mess.password.valid  ?"block":"none",color: 'red' }}>
                    { mess.password.error}
                    </div>
            </div>
            
            <br />
            <div className="d-grid">
            <button type="submit" className="btn btn-success" disabled={!isFormValid()} onClick={submitData}>Save</button>
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
    )
}