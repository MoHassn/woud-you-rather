import { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import { handleInitialData } from "../actions/shared";

function App({ users, questions, dispatch }) {
  console.log("users", users);
  console.log("questions", questions);

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  questions: state.questions,
});
export default connect(mapStateToProps)(App);