import { useParams, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

const Question = ({ questions, authedUser, dispatch }) => {
  const { question_id } = useParams();
  const question = questions[question_id];
  if (question === undefined) {
    return <Navigate to="/404" replace />;
  }
  console.log("question", question);
  console.log("authedUser", authedUser);
  const chooseOne = question.optionOne.votes.includes(authedUser);
  const chooseTwo = question.optionTwo.votes.includes(authedUser);
  const answered = chooseOne || chooseTwo;

  const optionOneCount = question.optionOne.votes.length;
  const optionTwoCount = question.optionTwo.votes.length;
  const totalCount = optionOneCount + optionTwoCount;
  if (answered) {
    return (
      <div>
        <h3>Would You Rather</h3>
        <p>
          {question.optionOne.text}{" "}
          <span>
            [{optionOneCount} of {totalCount} votes]
          </span>
          <span>
            ({Number.parseFloat((optionOneCount / totalCount) * 100).toFixed(2)}{" "}
            % )
          </span>
          <span>{chooseOne ? "👈your choice" : null}</span>
        </p>
        <p> OR</p>
        <p>
          {question.optionTwo.text}{" "}
          <span>
            [{optionTwoCount} of {totalCount} votes]
          </span>
          <span>
            ({Number.parseFloat((optionTwoCount / totalCount) * 100).toFixed(2)}{" "}
            % )
          </span>
          <span>{chooseTwo ? "👈you choice" : null}</span>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h3>Would You Rather</h3>
      <p
        onClick={(e) => {
          dispatch(
            handleAnswerQuestion({
              qid: question.id,
              answer: "optionOne",
              authedUser,
            })
          );
        }}
      >
        {question.optionOne.text}
      </p>
      <p>OR</p>
      <p
        onClick={(e) => {
          dispatch(
            handleAnswerQuestion({
              qid: question.id,
              answer: "optionTwo",
              authedUser,
            })
          );
        }}
      >
        {question.optionTwo.text}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
  authedUser: state.authedUser,
});
export default connect(mapStateToProps)(Question);
