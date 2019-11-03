import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { IActivity } from '../models/activity';
import Navbar from '../../features/nav/Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );

  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter(activity => activity.id === id)[0]);
  };

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  const handeOpenSelectedActivity = (id: string) => {
    setSelectedActivity(activities.filter(activity => activity.id === id)[0]);
    setEditMode(false);
  }

  useEffect(() => {
    axios
      .get<IActivity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data);
      });
  }, []);

  return (
    <Fragment>
      <Navbar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          setSelectedActivity={setSelectedActivity}
          selectActivity={handleSelectActivity}
          selectViewActivity={handeOpenSelectedActivity}
          selectedActivity={selectedActivity}
          activities={activities}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </Container>
    </Fragment>
  );
};

export default App;
