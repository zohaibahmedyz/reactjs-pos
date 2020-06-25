import React from 'react';
import axios from "axios";

export default class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("https://usmanpos.herokuapp.com/products/").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <ul>
          {users.map((user) => (
            <li className="user">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.sellingPrice}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}