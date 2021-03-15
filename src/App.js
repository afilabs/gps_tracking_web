import React, { useEffect, useState } from "react";

import firebase from './firebase';
import LiveMap from './livemap';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.database().ref("users").on("value", snapshot => {
      let users = [];
      snapshot.forEach(snap => {
        users.push(snap.val());
      });
      setUsers(users);
    });
  }, []);

  return (
    <div className="App">
      <div className="LiveMap">
        <LiveMap locations={users.map(u => u.location)} />
      </div>
    </div>
  );
};

export default App;
