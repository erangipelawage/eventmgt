import React, { useState } from 'react';

const CancellationPage = () => {
  const [cancellationReason, setCancellationReason] = useState('');

  const handleCancellation = () => {
    // Implement cancellation logic here
    console.log('Booking canceled with reason:', cancellationReason);
    // You may want to redirect the user or show a confirmation message
  };

  return (
    <div>
      <h2>Cancellation Page</h2>
      <textarea
        placeholder="Enter cancellation reason"
        value={cancellationReason}
        onChange={(e) => setCancellationReason(e.target.value)}
      />
      <button onClick={handleCancellation}>Cancel Booking</button>
    </div>
  );
};

export default CancellationPage;