import { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import RequireAuth from "./RequireAuth";
import Home from "./Home";
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import User from "./User";
import NotFound from "./NotFound";
import { handleInitialData } from "../actions/shared";

function App({ users, questions, dispatch }) {
  console.log("users", users);
  console.log("questions", questions);

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <div className="App">
      <div className="header-container">
        <Nav />
        <User />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/add"
          element={
            <RequireAuth>
              <NewQuestion />
            </RequireAuth>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <RequireAuth>
              <LeaderBoard />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/questions/:question_id"
          element={
            <RequireAuth>
              <Question />
            </RequireAuth>
          }
        />
        <Route
          path="/404"
          element={
            <RequireAuth>
              <NotFound />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  questions: state.questions,
});
export default connect(mapStateToProps)(App);
