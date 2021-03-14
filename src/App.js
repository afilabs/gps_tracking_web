import React from "react";

import firebase from './firebase';
import LiveMap from './livemap';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    firebase.database().ref("users").on("value", snapshot => {
      let users = [];
      snapshot.forEach(snap => {
        users.push(snap.val());
      });
      this.setState({users: users});
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const users = this.state.users;

    return (
      <div className="App">
        <div className="LiveMap">
          <LiveMap locations={users.map(u => u.location)} />
        </div>
      </div>
    );
  }
}

export default App;
