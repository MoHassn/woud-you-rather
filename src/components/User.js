import { connect } from "react-redux";
import { logout } from "../actions/auth";

const User = ({ user, dispatch }) => {
  if (user !== null) {
    return (
      <div className="user-container">
        <img
          className="avatar"
          src={user.avatarURL}
          alt={user.name + "image"}
        />
        <p>HI, {user.name} </p>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    );
  }
  return null;
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    user: authedUser ? users[authedUser] : null,
  };
};
export default connect(mapStateToProps)(User);
