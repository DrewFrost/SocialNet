import React, { useState, FormEvent } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  activity: IActivity | null;
  setEditMode: (editMode: boolean) => void;
}

const ActivityForm: React.FC<IProps> = ({
  activity: initialFormState,
  setEditMode
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);

  const handleSubmit = () =>{
    console.log(activity);
  }
  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name='title'
          placeholder='Title'
          value={activity.title}
        />
        <Form.TextArea
          onChange={handleInputChange}
          placeholder='Description'
          rows={2}
          name='description'
          value={activity.description}
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder='Category'
          name='category'
          value={activity.category}
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder='Date'
          name='date'
          type='date'
          value={activity.date}
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder='City'
          name='city'
          value={activity.city}
        />
        <Form.Input
          onChange={handleInputChange}
          placeholder='Venue'
          name='venue'
          value={activity.venue}
        />
        <Button floated='right' positive type='submit' content='Submit' />
        <Button
          floated='right'
          type='button'
          content='Cancel'
          onClick={() => setEditMode(false)}
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
