import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../image/Cust1.jpg';
import LogoutForm from './LogoutForm';
import { useNavigate } from 'react-router-dom';

const CustHome = () => {
  const [messList, setMessList] = useState([]);
  const [filteredMessList, setFilteredMessList] = useState([]);
  //const [areaList, setAreaList] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [obj,setObj]=useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const storedInfo = localStorage.getItem("loggedinfo");
    const parsedInfo = storedInfo ? JSON.parse(storedInfo) : null;
    setObj(parsedInfo);

    // Fetch mess data from your API endpoint
    fetch('http://localhost:8080/all')
      .then((response) => response.json())
      .then((data) => setMessList(data))
      .catch((error) => console.error('Error fetching mess data:', error));
  }, []);

   
    

  const handleSearch = (e) => {
    // const term = selectedArea.toLowerCase();
    // const filteredMessList = messList.filter((mess) =>
    //   mess.area && mess.area.toLowerCase().includes(term)
    // );
    // setFilteredMessList(filteredMessList);
    setSelectedArea(e.target.value)
    console.log(selectedArea)
  
   // alert(`http://localhost:8080/byArea/${selectedArea}`);
    fetch(`http://localhost:8080/byArea/${selectedArea}`)
      .then((response) => response.json())
      .then((data) => setMessList(data))
      .catch((error) => console.error('Error fetching city data:', error));
  };

  // const handleSearch = (e) => {
  //   setAreaList(e.target.value);
  //   const term = e.target.value.toLowerCase();
  //   const filteredMessList = messList.filter((mess) =>
  //     mess.area && mess.area.toLowerCase().includes(term)
  //   );
  //   setFilteredMessList(filteredMessList);
    
  // };

  const onSubmit = (mess_id) => {
    navigate(`/custplan/${mess_id}`);
  };


  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <h5>Welcome {obj?.username}</h5></a>
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

    <div className="container mt-5">
      <h1 className="text-center">Mess Search</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search mess..."
          onChange={handleSearch}
        />
      </div>
     

      <div className="row">
        {messList.map((mess, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={image} alt={mess.name} />
              <div className="card-body text-center">
                <h4 className="card-title text-center"><b>{mess.mess_name}</b></h4>
                <p className="card-text text-center"><b> Area :</b> &nbsp;{mess.area}</p>
                <p className="card-text text-center"><b>Address: </b> &nbsp;{mess.mess_address}</p>
               
                <p className="card-text text-center"><b>Contact:</b> &nbsp;{mess.contactno}</p>
                <button
                  className="btn btn-success"
                  onClick={() => onSubmit(mess.mess_id)}
                >
                  Visit Mess
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CustHome;




// // Import necessary modules from react-router-dom
// import { Link} from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // MessDetails component to display detailed mess information
// const MessDetails = ({ match, messes }) => {
//   const messId = parseInt(match.params.id);
//   const mess = messes.find(mess => mess.id === messId);

//   if (!mess) {
//     return <div>Mess not found</div>;
//   }

//   return (
//     <div>
//       <h2>Mess Details</h2>
//       <p>Mess Name: {mess.mess_name}</p>
//       <p>Area: {mess.area}</p>
//       <p>Contact No: {mess.contactno}</p>
//       <p>Address: {mess.mess_address}</p>
//       {/* Add more mess details as needed */}
//       <Link to="/">Back to Mess List</Link>
//     </div>
//   );
// };

// const CustHome = () => {
//   const [messes, setMesses] = useState([]);

//   useEffect(() => {
//     // Fetch messes from the API
//     fetch('http://localhost:8080/all')
//       .then(response => response.json())
//       .then(data => setMesses(data))
//       .catch(error => console.error('Error fetching messes', error));
//   }, []);

//   return (
   
//       <div>
//         {/* Navigation Bar */}
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           {/* ... (unchanged) */}
//         </nav>

//         {/* Main Content */}
//         <div className="container mt-3">
//           <h1 className="mb-4">Customer Homepage</h1>
//           <div className="list-group">
//             {messes.map(mess => (
//               <Link
//                 key={mess.id}
//                 to={`/mess/${mess.id}`}
//                 className="list-group-item list-group-item-action"
//               >
//                 <div className="d-flex w-100 justify-content-between">
//                   <h5 className="mb-1">Mess Name: {mess.mess_name}</h5>
//                   <small>Area: {mess.area}</small>
//                 </div>
//                 <p className="mb-1">Contact No: {mess.contactno}</p>
//                 <p className="mb-1">Address: {mess.mess_address}</p>
//                 {/* Add more mess details as needed */}
//               </Link>
//             ))}
//           </div>

//           {/* Define the route for MessDetails component */}
//         </div>
//       </div>
  
//   );
// };

// export default CustHome;

