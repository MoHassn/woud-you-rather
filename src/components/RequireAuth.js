import { Navigate, useLocation } from "react-router";
import { connect } from "react-redux";

const RequireAuth = ({ children, authedUser }) => {
  const location = useLocation();
  if (authedUser === null) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          path: location.pathname,
        }}
      />
    );
  }

  return children;
};

export default connect((state) => ({ authedUser: state.authedUser }))(
  RequireAuth
);
