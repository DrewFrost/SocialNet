import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { List, Container } from "semantic-ui-react";
import IActivity from "../models/activity";
import Navbar from "../../features/nav/Navbar";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data);
      });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <List bulleted>
          {activities.map(activity => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </Container>
    </Fragment>
  );
};

export default App;
