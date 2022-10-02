import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No Users Provided");
    }
  }
  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }
  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>Show Users</button>
        {this.state.showUsers && (
          <ul>
            {this.props.users.map((user) => (
              <User key={user.id} name={user.name} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>{showUsers ? "Hide" : "Show"} Users</button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;