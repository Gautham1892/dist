import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Dashboard.css";

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/userData'); // Replace '/api/userData' with your actual API endpoint
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <section className="dashboard">
      <div className="container">
        <h2 className="heading-section">User Dashboard</h2>

        {userData ? (
          <div className="dashboard-content">
            <div className="row">
              <div className="col-md-6">
                <h3>Name of the research scholar</h3>
                <p>{userData.first_name} {userData.last_name}</p>

                <h3>Registration number and date of joining</h3>
                <p>Registration Number: {userData.registration_no}</p>
                <p>Date of Joining: {userData.date_of_joining}</p>

                {/* Continue with the rest of the data fields */}
              </div>

              {/* Add more columns for other data fields */}
            </div>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
