import React from 'react';

const UserInfo = ({user}) => {
  return (
  <div>
    <div><strong>About Me</strong></div>
      <div className="well">
        <div className="row">
          <div className="col-sm-4 avatar">
            <img className="img-rounded" src={ user.photo } alt="..."/>
          </div>
          <div className="col-sm-8">
            <div><strong>{user.name}</strong></div>
            <div>{user.bio}</div>
          </div>
        </div>
      </div>
      <div><h1>Your lovely Trips</h1></div>
    </div>

  );
};

export default UserInfo;
