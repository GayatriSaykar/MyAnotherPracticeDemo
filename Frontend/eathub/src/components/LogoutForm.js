import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../loggedSlice";

export default function LogoutForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());

    // After the logout action is dispatched, navigate to the "/login" route
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout} style={{ color: 'white', backgroundColor: 'red' }}>Logout</button>
    </div>
  );
}
