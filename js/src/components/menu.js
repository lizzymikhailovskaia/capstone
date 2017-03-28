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
        <div className="navbar-header">
          <div className="menu">
            <ul className="nav nav-tabs" role="tablist">
              <li>
                <Link className="logo" to={`/`}>WellTravel</Link>
              </li>
              <li>
                <div className="hello">
                  Hello, {user_name}
                </div>
              </li>
              <li>
                <Link to={`/users/${user_id}`}  activeClassName="active">My page</Link>
              </li>
              <li>
                <Link to={`/trips/new`} activeClassName="active">Create a trip</Link>
              </li>
              <li>
                <a onClick={this.logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-header">
          <div className="menu">
            <ul className="nav nav-tabs" role="tablist">
              <li>
                <Link className="logo" to={`/`}>WellTravel</Link>
              </li>
              <li>
                <Link to={`/login`} activeClassName="active">Log in</Link>
              </li>
              <li>
                <Link to={`/signup`} activeClassName="active">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
};

export default Menu;
