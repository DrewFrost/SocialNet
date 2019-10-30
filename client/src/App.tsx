import React from "react";

import axios from "axios";
import {Header, Icon, List} from "semantic-ui-react";
import "./App.css";

class App extends React.Component {
    state = {
        values: []
    };

    async componentDidMount() {
        let response = await axios.get("http://localhost:5000/api/values");
        this.setState({
            values: response.data
        });
    }

    render() {
        let {values} = this.state;
        return (
            <div>
                <Header as="h2" icon>
                    <Icon name="users"/>
                    <Header.Content>Ebook</Header.Content>
                </Header>
                <List bulleted>
                    {values.map((value: any) => (
                        <List.Item key={value.id}>{value.name}</List.Item>
                    ))}
                </List>
            </div>
        );
    }
}

export default App;
