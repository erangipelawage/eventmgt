import React from 'react';
import { Link } from 'react-router-dom';

const UDashboard = () => {
  return (
    <>
     <div>
      <h2>User Dashboard</h2>
      <Link to="/cancellation">Cancel Booking</Link>
    </div>
    </>
  )
}

export default UDashboard;