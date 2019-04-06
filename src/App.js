import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// custom hook for API fetch
function useFetch(url, defaultResponse) {
  const [data, setData] = useState(defaultResponse);

  async function getDataFromApi(url) {
    try {
      const res = await fetch(url),
            data = await res.json();
      
      setData({
        isLoading: false,
        data
      });
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  useEffect(() => {
    getDataFromApi(url);
  }, []);

  return data;
}

export default function App() {
  const randomId = Math.floor((Math.random() * 10) + 1);
  const apiEndPoint = `https://reqres.in/api/users/${randomId}`;
  const useFetchResponse = useFetch(apiEndPoint, { isLoading: true, data: null });

  if (!useFetchResponse.data || useFetchResponse.isLoading) {
    return 'Loading...';
  }

  const { first_name, last_name, avatar } = useFetchResponse.data.data;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h3>Name: {first_name} {last_name}</h3>
          <div>
            <img src={avatar} alt="avatar"/>
          </div>
        </div>
      </header>
    </div>
  );
}
