
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../image/Cust1.jpg';


const Navbar = () => {
  React.useEffect(() => {
    // Set styles to remove scrollbar
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Cleanup function to reset styles when the component unmounts
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);
  return (
    <div>
      
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
             <h2>EATHUB</h2>
        </Link>

        {/* Navbar Toggler for responsive design */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Signup Links */}
            <li className="nav-item">
              <Link to="/customer-signup" className="nav-link">
                Signup (Customer)
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mess-signup" className="nav-link">
                Signup (Mess)
              </Link>
            </li>

            {/* Login Link */}
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Set the minimum height to full viewport height
          color: 'white', // Set text color to white
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <h1 className="text-center">Welcome to EATHUB</h1>
          <p style={{ fontSize: '20px' }}>Enjoy delicious moments with every bite.</p>

    </div>
    </ div>
  );
};

export default Navbar;
