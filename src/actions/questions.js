import { saveQuestion, saveQuestionAnswer } from "../utils/api";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    saveQuestion(question).then((question) => dispatch(addQuestion(question)));
  };
}

export function answerQuestion(info) {
  return {
    type: ANSWER_QUESTION,
    info,
  };
}
export function handleAnswerQuestion(info) {
  return (dispatch) => {
    saveQuestionAnswer(info).then(() => {
      dispatch(answerQuestion(info));
    });
  };
}
