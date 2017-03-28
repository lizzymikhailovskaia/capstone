import React from 'react';
import {Link} from 'react-router';

class Menu extends React.Component {
  logout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    this.forceUpdate();
  }

  render() {
    const user_id = localStorage.getItem('user_id');
    if (user_id) {
      const user_name = localStorage.getItem('user_name');
      return (
        <div>
          <div>
            Hello, {user_name}
            <button onClick={this.logout}>Logout</button>
          </div>
          <div>
            <Link to={`/users/${user_id}`}>My page</Link>
          </div>
        </div>
      );
    } else {
      return (
        <ul className="nav navbar-nav">
          <li>
            <Link to={`/login`} activeClassName="active">Log in</Link>
          </li>
          <li>
            <Link to={`/signup`} activeClassName="active">Signup</Link>
          </li>
        </ul>
      );
    }
  }
};

export default Menu;
