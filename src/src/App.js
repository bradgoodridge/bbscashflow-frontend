import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    axios.get('https://bbscashflow.onrender.com/')
      .then(response => setMessage(response.data.message))
      .catch(() => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Multi-project Cashflow Tracker</h1>
      <p>Status: {message}</p>
    </div>
  );
}

export default App;
