import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((res) => {
      console.log(res);
      setActivities(res.data);
    });
  }, []);

  return (
    <div className="App">
      {/* @ts-ignore */}
      <Header as="h2" icon="users" content="Reactivities"></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {activities.map((i: any) => (
          <List.Item key={i.id}>{i.description}</List.Item>
        ))}
      </header>
    </div>
  );
}

export default App;
