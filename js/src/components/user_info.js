import React from 'react';

const UserInfo = ({user}) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.bio}</p>
      <div className="thumbnail">
        <img src={ user.photo } alt="..."/>
      </div>
    </div>
  );
};

export default UserInfo;
