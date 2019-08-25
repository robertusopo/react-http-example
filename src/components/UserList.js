import React, { Component } from 'react';
import { listUsers } from '../services/UsersService';

class UserList extends Component {
    state = {
        users: [],
        error: false
    }

    componentDidMount = () => {
        listUsers()
            .then(response => this.setState({ users: response.data }))
            .catch(err => this.setState({ error: true }))
    }
    
    render = () => {
        if (this.state.error) {
            return (<h1>Ops, error</h1>);
        } else {
            return (
                <div className="UserList">
                    {this.state.users.map(user => (
                        <h1>{user.name}</h1>
                        <h1>Esto es una prueeeeeeba!</h1>
                    ))}
                </div>
            );
        }
    }
}

export default UserList;