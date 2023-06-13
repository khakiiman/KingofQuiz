import { useAsyncReducer } from '../hooks/useAsyncReducer';
import { Answer } from '../questions';
import { answerAction, initState, reducer, startGameAction } from '../state';
import { GameEnd } from './GameEnd';
import { GameInProgress } from './GameInProgress';
import { capitals } from '../capitals';

export function Game() {
  const [state, dispatch] = useAsyncReducer(initState(capitals), reducer);

  if (state.gameState.tag === 'in_progress') {
    return (
      <GameInProgress
        gameInProgressState={state.gameState}
        category='geography'
        onAnswerClick={(answer: Answer) => dispatch(answerAction(answer))}
      />
    );
  } else {
    return (
      <GameEnd
        gameEndState={state.gameState}
        onRestart={() => {
          dispatch(startGameAction());
        }}
      />
    );
  }
}
