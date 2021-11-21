import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { handleAddQuestion } from "../actions/questions";

const NewQuestion = ({ authedUser, dispatch }) => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(first, second);
    const question = {
      optionOneText: first,
      optionTwoText: second,
      author: authedUser,
    };
    dispatch(handleAddQuestion(question));
    navigate("/");
  };

  return (
    <div>
      <h3> Create A Question</h3>
      <form onSubmit={handleSubmit}>
        <p>Would You Rather</p>
        <div>
          <input
            onChange={(e) => setFirst(e.target.value)}
            value={first}
            type="text"
            placeholder="first option"
          />
          <p>OR</p>
          <input
            onChange={(e) => setSecond(e.target.value)}
            value={second}
            type="text"
            placeholder="second option"
          />
        </div>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ authedUser: state.authedUser });
export default connect(mapStateToProps)(NewQuestion);
