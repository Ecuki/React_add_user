import React from "react";
import "./UsersList.css";

const UsersList = props => {
  console.log(props.users);
  const users = props.users.map(user => (
    <li key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.last} />
      <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
      <p>{user.email}</p>
    </li>
  ));
  return <ul>{users}</ul>;
};
export default UsersList;
