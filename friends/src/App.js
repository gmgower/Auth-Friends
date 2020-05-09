import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ul>
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
          <li>
            <Link to={'/friendlist'}>Friend List</Link>
          </li>
        </ul> 
        {/* pass our own props  render={props} => <Login {...props}*/}
        <Route path='/login' render={(props) =>  <Login {...props}/>}/> 
        <PrivateRoute exact path='/friendlist' component={AddFriend} />
        {/* pass our own props name="Mada" */}
        <PrivateRoute exact path='/friendlist' name='Mada' component={FriendList} /> 
      </header>
    </div>
  );
}

export default App;
