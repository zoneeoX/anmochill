import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let user = window.localStorage.getItem("user");

    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div>
        
      </div>
    </div>
  );
};

export default Dashboard;
