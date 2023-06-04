import { Question, Option } from "../questions";
import { GameInProgressState } from "../state";
import { GameInProgress } from "./GameInProgress";

export function Game() {
  const exampleQuestion1: Question = {
    correctOption: Option.A,
    optionA: {
      title: "Iran",
      answer: "Tehran",
    },
    optionB: {
      title: "Austria",
      answer: "Wien",
    },
    optionC: {
      title: "Azerbaijan",
      answer: "Baku",
    },
    optionD: {
      title: "Bahamas",
      answer: "Nassau",
    },
  };

  const exampleState: GameInProgressState = {
    tag: "in_progress",
    answeredQuestions: [],
    currentQuestion: exampleQuestion1,
    currentAnswer: undefined,
    nextQuestions: [],
  };

  return (
    <GameInProgress
      gameInProgressState={exampleState}
      category="geography"
      onAnswerClick={() => {}}
    />
  );
}
