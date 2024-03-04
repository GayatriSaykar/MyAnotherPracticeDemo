
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import LogoutForm from './LogoutForm';
// import { useNavigate } from 'react-router-dom';



// const MessHome = () => {
//   const navigate = useNavigate();
//   const [subscriptions, setSubscriptions] = useState([]);
//   const[mess,setMess] = useState({});
//   const [selectedSubscription, setSelectedSubscription] = useState(0);
//   const [amount, setAmount] = useState(0);
  
//   const[om,setOm] = useState([]);
//   const localdata = JSON.parse(localStorage.getItem("loggedinfo"));

//   const messSubscriptionId = localStorage.getItem("messSubId");
//   const [menuSubscriptionData, setMenuSubscriptionData] = useState([]);

//   useEffect(() => {
//     // Fetch subscription data for dropdown
//     fetch3();
//     fetch2();
//   }, []);

//   const fetch2 =()=>{
//     fetch('http://localhost:8080/SubTablePlans')
//       .then(response => response.json())
//       .then(data => setSubscriptions(data)
//       )
//       .catch(error => console.error('Error fetching subscriptions:', error));
//   }
//   const fetch3 = ()=>{
//    // alert(localdata.login_id);
//     fetch('http://localhost:8080/getOnemess?uid='+localdata.login_id)
//     .then(response => response.json())
//     .then(data => {setMess(data); })
//     .catch(error => console.error('Error fetching subscriptions:', error));
//   }
//   const ShowMesses = (e)=>{
//     e.preventDefault();
//     console.log("Mess Id: "+mess.mess_id+" subId: "+selectedSubscription)
//     fetch('http://localhost:8080/getPerticularMessSubscription?messid='+mess.mess_id+"&subId="+selectedSubscription)
//       .then(response => response.json())
//       .then(data => {setOm(data);console.log(JSON.stringify(data)); })
//       .catch(error => console.error('Error fetching mess subscriptions:', error));
// }
// console.log(selectedSubscription)
// console.log(mess.mess_id)
//   const handleSave = (e) => {
//     e.preventDefault();
//     console.log("in subscription&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7")
//     const reqOptions = {
//         method:"POST",
//         headers: {'content-type':'application/json'},
//         body: JSON.stringify({
//           mess_id : mess.mess_id,
//           subscription_id:selectedSubscription,
//           subscription_name:selectedSubscription,
//           rate: amount
//         })
//     }

//     fetch("http://localhost:8080/saveMessSubscription", reqOptions)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Mess subscription saved:', data);
//         setOm(prevOm => [...prevOm, data]);
//       })
//       .catch(error => console.error('Error saving mess subscription:', error));
//   };


//   useEffect(() => {
//     fetch(`http://localhost:8080/displayMenuItems?messSubId=${messSubscriptionId}&menuId=6`)
//       .then((response) => response.json())
//       .then((data) => setMenuSubscriptionData(data))
//       .catch((error) => console.error("Error fetching menu subscription data:", error));
//   }, [messSubscriptionId]);

//   const handleMenu = (e, id) => {
//    // alert(id);
//     localStorage.setItem("messId" , id);
//     navigate("/addmenu");
//   };

// const ViewMenu = () => {
//   // Retrieve messSubscriptionId from localStorage
//   const messSubscriptionId = localStorage.getItem("messSubId");

//   // State to store menu subscription data
//   const [menuSubscriptionData, setMenuSubscriptionData] = useState([]);

//   // Fetch menu subscription data on component mount
//   useEffect(() => {
//     fetch(`http://localhost:8080/displayMenuItems?messSubId=${messSubscriptionId}&menuId=6`)
//       .then((response) => response.json())
//       .then((data) => setMenuSubscriptionData(data))
//       .catch((error) => console.error("Error fetching menu subscription data:", error));
//   }, [messSubscriptionId]);

//   return (
//     <div>
//       {/* Navigation Bar */}
//       {/* <div>{JSON.stringify(messSubscriptions)}</div>
//       <div>{JSON.stringify(mess)}</div> 
//      <div>{JSON.stringify(selectedSubscription)}</div> 
//        <div>{JSON.stringify(om)}</div>  */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//         <a className="navbar-brand" href="#">MESS </a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="#add-plan">Add Plan</Link>
//               </li>
//              <li className="nav-item">
//                   <LogoutForm/>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="container mt-3">
//         {/* Bootstrap Grid System for Layout */}
        
//         <div className="row">
//           <div className="col-md-4 mb-3">
//             {/* Dropdown to select subscription */}
//             <select className="form-select" onChange={(e) => setSelectedSubscription(e.target.value)}>
//               <option value="">Select Subscription</option>
//               {subscriptions.map(subscription => (
//                 <option value={subscription.subscription_id}>
//                   {`${subscription.subscription_name} - ${subscription.period} months`}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="col-md-4 mb-3">
//             {/* Textfield for amount */}
//             <input type="text" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
//           </div>
//           <div className="col-md-1 mb-1">
//             {/* Save button */}
//             <button className="btn btn-primary" onClick={(e)=>handleSave(e)}>Save</button>
//           </div> 
//           <div className="col-md-1 mb-1">
//              <button className="btn btn-secondary" onClick={(e)=>ShowMesses(e)}>Show </button>
//           </div>
         
//         </div>
//         {/* {JSON.stringify(om)} */}
//         <table className='table table-bordered'>
//           <tr>
//             <td>Mess Id</td>
//             <td>Sub Id</td>
//             <td>Sub Name</td>
//             <td>Period</td>
//             <td>Rate</td>
//             <td>Add Menu</td>
//             <td>View Menu</td>
//           </tr>
//           {om.map(o=>{
//             return <tr>
//               <td>{o.messtable.mess_id}</td>
//               <td>{o.subid.subscription_id}</td>
//               <td>{o.subid.subscription_name}</td>
//               <td>{o.subid.period}</td>
//               <td>{o.rate}</td>
             
//               <td> 
               
//             {/* Save button */}
//             <button className="btn btn-info"  onClick={(e)=>handleMenu(e , o.mess_subscription_id)}>Add Menu</button></td>
//             <td>
//               <button className="btn btn-success"  onClick={(e)=>ViewMenu(e , o.mess_subscription_id)}>View Menu</button>
//               <h3>View Menu</h3>
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th>Item</th>
//                         <th>Quantity</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {menuSubscriptionData.map((menuSub) => (
//                         <tr key={menuSub.menu_subscription_id}>
//                           <td>{menuSub.menu_id.item}</td>
//                           <td>{menuSub.quantity}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
              
//             </td>
//             </tr>
//           })}
//         </table>

// {/* <div>
//   <h3>Mess Subscriptions</h3>
//   <ul>
//   {messSubscriptions.map(subscription => (
//     <li>
//       {`Mess Subscription ID: ${subscription.mess_subscription_id}, Subscription ID: ${subscription.subid!=null?subscription.subid.subscription_id:0}, Month:${subscription.subid!=null?subscription.subid.subscription_name:0} , Period:${subscription.subid!=null?subscription.subid.period:0} , Rate: ${subscription.rate}`}
//     </li>
//   ))}
// </ul>

 
// </div> */}

//       </div>
//     </div>
//   );
// };

// export default MessHome;


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import LogoutForm from './LogoutForm';
import { useNavigate } from 'react-router-dom';

const MessHome = () => {
  const navigate = useNavigate();
  const localdata = JSON.parse(localStorage.getItem("loggedinfo"));
  const messSubscriptionId = localStorage.getItem("messId");

  const [subscriptions, setSubscriptions] = useState([]);
  const [mess, setMess] = useState({});
  const [selectedSubscription, setSelectedSubscription] = useState(0);
  const [amount, setAmount] = useState(0);
  const [om, setOm] = useState([]);
  const [menuSubscriptionData, setMenuSubscriptionData] = useState([]);

  useEffect(() => {
    fetchSubscriptions();
    fetchMess();
  }, []);

  const fetchSubscriptions = () => {
    fetch('http://localhost:8080/SubTablePlans')
      .then(response => response.json())
      .then(data => setSubscriptions(data))
      .catch(error => console.error('Error fetching subscriptions:', error));
  }

  const fetchMess = () => {
    fetch(`http://localhost:8080/getOnemess?uid=${localdata.login_id}`)
      .then(response => response.json())
      .then(data => setMess(data))
      .catch(error => console.error('Error fetching mess:', error));
  }
// console.log(JSON.stringify(data)
  const showMesses = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/getPerticularMessSubscription?messid=${mess.mess_id}&subId=${selectedSubscription}`)
      .then(response => response.json())
      .then(data => 
        setOm(data)
      )
      .catch(error => console.error('Error fetching mess subscriptions:', error));
  }

  const handleSave = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        mess_id: mess.mess_id,
        subscription_id: selectedSubscription,
        subscription_name: selectedSubscription,
        rate: amount
      })
    };

    fetch("http://localhost:8080/saveMessSubscription", reqOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Mess subscription saved:', data);
        setOm(prevOm => [...prevOm, data]);
      })
      .catch(error => console.error('Error saving mess subscription:', error));
  };

  const handleMenu = (e, id) => {
    localStorage.setItem("messId", id);
    navigate("/addmenu");
  };
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">MESS </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#add-plan">Add Plan</Link>
              </li>
              <li className="nav-item">
                <LogoutForm />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <select className="form-select" onChange={(e) => setSelectedSubscription(e.target.value)}>
              <option value="">Select Subscription</option>
              {subscriptions.map(subscription => (
                <option value={subscription.subscription_id} key={subscription.subscription_id}>
                  {`${subscription.subscription_name} - ${subscription.period} months`}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
          </div>
          <div className="col-md-1 mb-1">
            <button className="btn btn-primary" onClick={(e) => handleSave(e)}>Save</button>
          </div>
          <div className="col-md-1 mb-1">
            <button className="btn btn-secondary" onClick={(e) => showMesses(e)}>Show </button>
          </div>
        </div>

        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Mess Id</th>
              <th>Sub Id</th>
              <th>Sub Name</th>
              <th>Period</th>
              <th>Rate</th>
              <th>Add Menu</th>
              <th>View Menu</th>
            </tr>
          </thead>
          <tbody>
            {om.map(o => (
              <tr key={o.mess_subscription_id}>
                <td>{o.messtable.mess_id}</td>
                <td>{o.subid.subscription_id}</td>
                <td>{o.subid.subscription_name}</td>
                <td>{o.subid.period}</td>
                <td>{o.rate}</td>
                <td>
                  <button className="btn btn-info" onClick={(e) => handleMenu(e, o.mess_subscription_id)}>Add Menu</button>
                </td>
                <td>
                  <button className="btn btn-success" onClick={() => navigate(`/viewmenu/${o.mess_subscription_id}`)}>View Menu</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessHome;
