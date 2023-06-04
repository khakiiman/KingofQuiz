import { Answer, AnsweredQuestion, Question } from "./questions";

export interface GameInProgressState {
  tag: "in_progress";
  answeredQuestions: Array<AnsweredQuestion>;
  currentQuestion: Question;
  currentAnswer?: Answer;
  nextQuestions: Array<Question>;
}

export interface GameEndState {
  tag: "ended";
  answeredQuestions: Array<AnsweredQuestion>;
}
