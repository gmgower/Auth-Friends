import React, { Component } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

export default class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
          .post('/login', this.state.credentials)
          .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friendlist');
          })
          .catch(err => console.log(err));
      };

    render() {
        return (
            <div>
                <form>
                    <input 
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    placeholder='login name'
                    onChange={this.handleChange}
                    />
                    <input 
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    placeholder='password'
                    onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>                
            </div>
        )
    }
}
