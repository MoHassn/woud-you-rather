import { connect } from "react-redux";
import LeaderBoardUser from "./LeaderBoardUser";

const LeaderBoard = ({ users }) => {
  return (
    <div>
      {Object.values(users)
        .sort((a, b) => compareStats(a, b))
        .map((user) => {
          return (
            <LeaderBoardUser
              key={user.id}
              name={user.name}
              avatarURL={user.avatarURL}
              askedQuestions={user.questions.length}
              answeredQuestions={Object.keys(user.answers).length}
            />
          );
        })}
    </div>
  );
};

function compareStats(userA, userB) {
  const statsA = Object.keys(userA.answers).length + userA.questions.length;
  const statsB = Object.keys(userB.answers).length + userB.questions.length;
  return statsB - statsA;
}

const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps)(LeaderBoard);
