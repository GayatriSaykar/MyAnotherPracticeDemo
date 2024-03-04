import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import LogoutForm from './LogoutForm';

export default function CustPlan() {
  const navigate = useNavigate();
  const { mess_id: messId } = useParams();
  const [messSubscriptions, setMessSubscriptions] = useState([]);
  const [om, setOm] = useState([]);

  useEffect(() => {
    fetch2();
    fetch4();
  }, [messId]);

  const onSubmit = () => {
    navigate("/payment");
  };

  const goBack = () => {
    navigate(-1);
  };

  const fetch2 = () => {
    fetch('http://localhost:8080/SubTablePlans')
      .then(response => response.json())
      .then(data => setMessSubscriptions(data))
      .catch(error => console.error('Error fetching subscriptions:', error));
  };

  const fetch4 = () => {
    if (messId) {
      fetch(`http://localhost:8080/getPerticularMessSubscriptionTwo?mess_id=${messId}`)
        .then(response => response.json())
        .then(data => setOm(Array.isArray(data) ? data : []))
        .catch(error => console.error('Error fetching mess subscriptions:', error));
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/custhome">Customer </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#view-plan">View Plan</Link>
              </li>
              <li className="nav-item">
                <LogoutForm />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* {JSON.stringify(om)} */}
      <div className="table-responsive">
        <h3>Customer plan</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Subscription ID</th>
              <th>Subscription Name</th>
              <th>Rate</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {om.map(o => (
              <tr key={o.subid.subscription_id}>
                <td>{o.subid.subscription_id}</td>
                <td>{o.subid.subscription_name}</td>
                <td>{o.rate}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={onSubmit}
                  >
                    Payment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-secondary"
        onClick={goBack}
      >
        Back
      </button>
    </div>
  );
}
