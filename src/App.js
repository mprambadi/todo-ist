import React, { Component } from "react";
import "./App.scss";
import { users } from "./users";

class App extends Component {
  constructor(props){
      super(props)

      this.state = {
        users,
        filter: "",
        items: [],
        coba: ""
      };

      this.kekirim = this.kekirim.bind(this)

  }

  componentDidMount() {
    Notification.requestPermission().then(function(result) {
      console.log(result);
    });
  }
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  spawnNotification(body, icon, title) {
    const options = {
      body: body,
      icon: icon
    };
    new Notification(title, options);
  }

  kekirim (e) {
    e.preventDefault();

    this.setState(state => {
      return {
        users: [
          ...state.users,
          {
            id: Date.now(),
            name: state.coba,
            username: state.coba,
            email: state.coba
          }
        ]
      };
    });
  };


  render() {
    const userFilter = this.state.users.filter(
      user =>
        [user.name, user.email, user.username]
          .join(" ")
          .toLowerCase()
          .indexOf(this.state.filter) !== -1
    );

    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column w-50 mt-5">
          <input
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
            className="form-control mb-2"
          />

          {userFilter.map(user => (
            <div className="App-content-item" key={user.id}>
              <div>{user.username}</div>
              <div style={{ backgroundColor: this.state.filter === "a" ? "none" : "" }}>
                {user.name}
              </div>
              <div>{user.email}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default App;
