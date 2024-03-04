
// import React, { useState, useEffect } from 'react';
// import LogoutForm from './LogoutForm';
// const Admin = () => {
//   const [mess, setMess] = useState([]);

//   useEffect(() => {
//     // Fetch mess from the API
//     fetch('http://localhost:8080/all')
//       .then(response => response.json())
//       .then(data => setMess(data))
//       .catch(error => console.error('Error fetching mess', error));
//   }, []);

//   const handleApprove = (mess_id) => {
//     // Handle login approval
//     fetch(`http://localhost:8080/approve/${mess_id}`, {
//       method: 'PUT',
//     })
//       .then(response => {
//         if (response.ok) {
//           // Handle success
//           console.log('Mess approved successfully!');
//           // Optionally update the state or perform any other actions
//           updateMessStatus(mess_id, true);
//         } else {
//           // Handle error
//           console.error('Error approving mess:', response.statusText);
//         }
//       })
//       .catch(error => console.error('Error approving mess:', error));
//   };

//   const handleReject = (mess_id) => {
//     // Handle mess rejection
//     fetch(`http://localhost:8080/reject/${mess_id}`, {
//       method: 'PUT',
//     })
//       .then(response => {
//         if (response.ok) {
//           // Handle success
//           console.log('Mess rejected successfully!');
//           // Optionally update the state or perform any other actions
//           updateMessStatus(mess_id, false);
//         } else {
//           // Handle error
//           console.error('Error rejecting mess:', response.statusText);
//         }
//       })
//       .catch(error => console.error('Error rejecting mess:', error));
//   };

//   const updateMessStatus = (mess_id, status) => {
//     setMess(prevMess => prevMess.map(messItem => {
//       if (messItem.login_id.login_id === mess_id) {
//         return { ...messItem, status };
//       }
//       return messItem;
//     }));
//   };
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Admin Dashboard</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Profile</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Statistics</a>
//               </li>
//               <li className="nav-item">
//                 <LogoutForm/>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* mess List */}
//       <div className="container mt-4">
//         <h1>Mess List</h1>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Messname</th>
//               <th scope="col">Ownername</th>
//               <th scope="col">Address</th>
//               <th scope="col">City </th>
//               <th scope="col">Contact No</th>
//               <th scope="col">Status</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mess.map((mess) => (
//               <tr key={mess.mess_id}>
//                 <td>{mess.mess_name}</td>
//                 <td>{mess.owner_name}</td>
//                 <td>{mess.mess_address}</td>
//                 <td>{mess.city}</td>
//                 <td>{mess.contactno}</td>
//                 <td className={mess.status ? 'text-success' : 'text-danger'}>
//                   {mess.status ? 'Approved' : 'Rejected'}
//                 </td>
//                 <td>
//                   <button className="btn btn-success" onClick={() => handleApprove(mess.login_id.login_id)}>Accept</button>
//                   <button className="btn btn-danger ms-2" onClick={() => handleReject(mess.login_id.login_id)}>Reject</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* {JSON.stringify(mess)} */}
//     </div>
//   );
// };

// export default Admin;



import React, { useState, useEffect } from 'react';
import LogoutForm from './LogoutForm';
import { Link } from 'react-router-dom';
const Admin = () => {
  const [mess, setMess] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // Fetch mess from the API
    fetch('http://localhost:8080/all')
      .then(response => response.json())
      .then(data => setMess(data))
      .catch(error => console.error('Error fetching mess', error));
  }, [refresh]);

  const handleApprove = (mess_id) => {
    // Handle login approval
    fetch(`http://localhost:8080/approve/${mess_id}`, {
      method: 'PUT',
    })
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log('Mess approved successfully!');
          // Optionally update the state or perform any other actions
          
          updateMessStatus(mess_id, true);
    
          
        } else {
          // Handle error
          console.error('Error approving mess:', response.statusText);
        }
      })
      .catch(error => console.error('Error approving mess:', error));
  };

  const handleReject = (mess_id) => {
    // Handle mess rejection
    fetch(`http://localhost:8080/reject/${mess_id}`, {
      method: 'PUT',
    })
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log('Mess rejected successfully!');
          // Optionally update the state or perform any other actions
          updateMessStatus(mess_id, false);
        } else {
          // Handle error
          console.error('Error rejecting mess:', response.statusText);
        }
      })
      .catch(error => console.error('Error rejecting mess:', error));
  };

  const updateMessStatus = (mess_id, status) => {
    setMess(prevMess => prevMess.map(messItem => {
      if (messItem.login_id.login_id === mess_id) {
        return { ...messItem, status };
      }
      return messItem;
    }));
  };

  const DeleteData = (mess_id) => {
    console.log('Deleting mess with ID:', mess_id);
  
    fetch(`http://localhost:8080/MessDelete/${mess_id}`, {
      method: 'PUT', // Use PUT instead of DELETE
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deleted: true }), // Update the status to indicate soft delete
    })
      .then(response => {
        if (response.ok) {
          console.log('Mess soft deleted successfully!');
          setRefresh(prevRefresh => !prevRefresh);
          // Optionally update the state or perform any other actions
          removeMess(mess_id);
        } else {
          console.error('Error soft deleting mess:', response.statusText);
        }
      })
      .catch(error => console.error('Error soft deleting mess:', error));
  };
  

  
  const removeMess = (mess_id) => {
    setMess(prevMess => prevMess.filter(messItem => messItem.login_id.login_id !== mess_id));
  };

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <h5>Admin Dashboard</h5></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <LogoutForm/>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      {/* mess List */}
      <div className="container mt-4">
        <h1>Mess List</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Messname</th>
              <th scope="col">Ownername</th>
              <th scope="col">Address</th>
              <th scope="col">City </th>
              <th scope="col">Contact No</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {mess.map((mess) => (
              <tr key={mess.mess_id}>
                <td>{mess.mess_name}</td>
                <td>{mess.owner_name}</td>
                <td>{mess.mess_address}</td>
                <td>{mess.city}</td>
                <td>{mess.contactno}</td>
                <td className={mess.status ? 'text-success' : 'text-danger'}>
                  {mess.status ? 'Approved' : 'Rejected'}
                </td>
                <td>
                  <button className="btn btn-success" onClick={() => handleApprove(mess.login_id.login_id)}>Accept</button>
                  <button className="btn btn-danger ms-2" onClick={() => handleReject(mess.login_id.login_id)}>Reject</button>
                </td>
                <td>
                <button className="btn btn-primary ms-2" onClick={() => DeleteData(mess.mess_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {JSON.stringify(mess)} */}
    </div>
  );
};

export default Admin;

