import React, { useState } from 'react';

const CancellationPage = () => {
  const [cancellationReason, setCancellationReason] = useState('');

  const handleCancellation = () => {
    console.log('Booking canceled with reason:', cancellationReason);
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