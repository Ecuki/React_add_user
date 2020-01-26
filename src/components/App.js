import React from "react";
import UsersList from "./UsersList.js";
import ButtonFetchUsers from "./ButtonFetchUsers.js";
import "./App.css";

const API5 = "https://randomuser.me/api/?results=5";
const API1 = "https://randomuser.me/api/?results=1";
class App extends React.Component {
  state = {
    users: []
  };
  usersUpdate = (data, API) => {
    if (API === API1) {
      this.setState(prevStste => ({
        users: prevStste.users.concat(data)
      }));
    } else {
      this.setState({
        users: data
      });
    }
  };
  handleDataFetch = API => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Błąd");
      })
      .then(response => response.json())
      .then(json => {
        const users = json.results;
        this.usersUpdate(users, API);
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
        {users.length > 0 ? <UsersList users={users} /> : ""}
      </div>
    );
  }
}

export default App;
