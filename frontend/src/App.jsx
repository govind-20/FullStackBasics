import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []); 

  return (
    <>
      <h3>Start</h3>
      <p>{jokes.length}</p>

      {
        jokes.map((data) => (
          <div key={data.id}>
            <h3>{data.name}</h3>
          </div>
        ))
      }
    </>
  );
}

export default App;
