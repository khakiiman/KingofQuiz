import { useAsyncReducer } from "../hooks/useAsyncReducer";
import { Answer } from "../questions";
import {
  answerAction,
  categorySetAction,
  initState,
  reducer,
  startGameAction,
  tryAgainAction,
} from "../state";
import { GameEnd } from "./GameEnd";
import { GameInProgress } from "./GameInProgress";
import { GameStart } from "./GameStart";

export function Game() {
  const [state, dispatch] = useAsyncReducer(initState(), reducer);

  if (state.gameState.tag === "before_start") {
    return (
      <GameStart
        category={state.category}
        onCategorySet={(category) => dispatch(categorySetAction(category))}
        onStartClick={() => dispatch(startGameAction())}
      />
    );
  } else if (state.gameState.tag === "in_progress") {
    return (
      <GameInProgress
        gameInProgressState={state.gameState}
        category={state.category}
        onAnswerClick={(answer: Answer) => dispatch(answerAction(answer))}
      />
    );
  } else {
    return (
      <GameEnd
        gameEndState={state.gameState}
        onRestart={() => dispatch(tryAgainAction())}
      />
    );
  }
}
