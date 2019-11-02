import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { List, Container } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import Navbar from "../../features/nav/Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter(activity => activity.id === id)[0]);
  };
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
        <ActivityDashboard
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity}
          activities={activities}
        />
      </Container>
    </Fragment>
  );
};

export default App;
