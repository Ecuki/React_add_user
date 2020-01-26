import React from "react";
import UsersList from "./UsersList.js";
import ButtonFetchUsers from "./ButtonFetchUsers.js";
import "./App.css";

const API5 = "https://randomuser.me/api/?results=5";
const API1 = "https://randomuser.me/api/?results=1";
class App extends React.Component {
  state = {
    users: null
  };
  handleDataFetch = API => {
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
        <ButtonFetchUsers
          value={1}
          class={"addUser"}
          click={this.handleDataFetch.bind(this, API1)}
        />
        <ButtonFetchUsers
          value={5}
          class={"addUsers"}
          click={this.handleDataFetch.bind(this, API5)}
        />
        {users !== {} && users !== null ? <UsersList users={users} /> : ""}
      </div>
    );
  }
}

export default App;
