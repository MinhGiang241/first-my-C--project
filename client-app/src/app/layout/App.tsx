import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { Activity } from "../model/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((res: any) => {
      console.log(res);
      setActivities(res.data);
    });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
}

export default App;
