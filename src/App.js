import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import Nav from "./components/Nav";
import { handleInitialData } from "./actions/shared";

function App({ users, questions, dispatch }) {
  console.log("users", users);
  console.log("questions", questions);

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  questions: state.questions,
});
export default connect(mapStateToProps)(App);
