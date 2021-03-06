import {
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...action.questions };
    case ADD_QUESTION:
      const { question } = action;
      return { ...state, [question.id]: question };
    case ANSWER_QUESTION:
      const { qid, answer, authedUser } = action.info;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
