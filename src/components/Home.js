import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ questions, authedUser }) => {
  const [answered, setAnswered] = useState(false);
  let currentQuestions;
  if (answered) {
    currentQuestions = Object.values(questions)
      .filter(
        ({ optionOne, optionTwo }) =>
          optionOne.votes.includes(authedUser) ||
          optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => b.timestamp - a.timestamp);
  } else {
    currentQuestions = Object.values(questions)
      .filter(
        ({ optionOne, optionTwo }) =>
          !optionOne.votes.includes(authedUser) &&
          !optionTwo.votes.includes(authedUser)
      )
      .sort((a, b) => b.timestamp - a.timestamp);
  }

  return (
    <div>
      <h3>Questions</h3>
      <button onClick={() => setAnswered((answered) => !answered)}>
        {answered ? "Show Unanswered" : "Show Answered"}
      </button>
      {currentQuestions.map((q) => (
        <div className="question-home" key={q.id}>
          <Link className="question-home" to={`/questions/${q.id}`}>
            <p>{q.author} asks </p>
            <p>Would you Rather</p>
            <p>{q.optionOne.text}</p>
            <p> OR </p>
            <p>{q.optionTwo.text}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(Home);
