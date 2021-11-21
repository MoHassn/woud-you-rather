import { connect } from "react-redux";
import { login } from "../actions/auth";
import { useLocation, useNavigate } from "react-router";

const Login = ({ users, dispatch }) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleChange = (e) => {
    const user = e.target.value;
    console.log(user);
    dispatch(login(user));
    navigate(state?.path || "/");
  };

  return (
    <div>
      <select defaultValue="default" onChange={handleChange}>
        <option value="default" disabled>
          Choose user
        </option>
        {Object.values(users).map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps)(Login);
