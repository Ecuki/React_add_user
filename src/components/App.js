import React from "react";
import UsersList from "./UsersList.js";
import ButtonFetchUsers from "./ButtonFetchUsers.js";
import "./App.css";

const API = "https://randomuser.me/api/?results=5";

class App extends React.Component {
  state = {
    users: null
  };
  handleDataFetch = () => {
    // console.log("click");
    fetch(API)
      .then(response => {
        if (response.ok) {
          // console.log(response);
          return response;
        }
        throw Error("Błąd");
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          users: json.results
        });
      })
      .catch(error => console.log(error));
  };
  render() {
    const users = this.state.users;
    console.log(users);
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users !== {} && users !== null ? <UsersList users={users} /> : ""}
      </div>
    );
  }
}

export default App;
