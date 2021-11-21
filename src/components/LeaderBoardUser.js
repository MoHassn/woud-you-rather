const LeaderBoardUser = ({
  name,
  avatarURL,
  askedQuestions,
  answeredQuestions,
}) => {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-user">
        <img className="avatar" src={avatarURL} alt={"avatar of " + name} />
        <p>{name}</p>
      </div>
      <p>Number of asked Questions {askedQuestions}</p>
      <p>Number of answer Questions {answeredQuestions}</p>
    </div>
  );
};

export default LeaderBoardUser;
