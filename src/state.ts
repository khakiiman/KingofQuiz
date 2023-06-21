import {
  Answer,
  AnsweredQuestion,
  Category,
  makeQuestions,
  Question,
  QuestionItem,
} from './questions';
import { AsyncReducer, noEffects } from './hooks/useAsyncReducer';
import { delay } from './utils';
import confetti from 'canvas-confetti';
import { databaseQuestions } from './dataBase';

export type State = {
  questionItems: Map<Category, Array<QuestionItem>>;
  category: Category;
  gameState: GameState;
};

export type GameState =
  | GameBeforeStartState
  | GameInProgressState
  | GameEndState;

export interface GameBeforeStartState {
  tag: 'before_start';
}

export interface GameInProgressState {
  tag: 'in_progress';
  answeredQuestions: Array<AnsweredQuestion>;
  currentQuestion: Question;
  currentAnswer?: Answer;
  nextQuestions: Array<Question>;
}

export interface GameEndState {
  tag: 'ended';
  answeredQuestions: Array<AnsweredQuestion>;
}

export type Action =
  | { tag: 'answer'; answer: Answer }
  | { tag: 'next_question' }
  | { tag: 'category_set'; category: Category }
  | { tag: 'start_game' }
  | { tag: 'try_again' }
  | {
      tag: 'new_game';
      questions: Array<Question>;
      questionItems: Array<QuestionItem>;
    };

export const tryAgainAction = (): Action => ({ tag: 'try_again' });
export const categorySetAction = (category: Category): Action => ({
  tag: 'category_set',
  category,
});
export const answerAction = (answer: Answer): Action => ({
  tag: 'answer',
  answer,
});
export const nextQuestionAction: Lazy<Action> = () => ({
  tag: 'next_question',
});
export const startGameAction: Lazy<Action> = () => ({ tag: 'start_game' });
export const newGameAction = (
  questions: Array<Question>,
  questionItems: Array<QuestionItem>
): Action => ({
  tag: 'new_game',
  questions,
  questionItems,
});

export function initState(): State {
  const gameState: GameState = {
    tag: 'before_start',
  };

  return {
    questionItems: new Map(),
    category: 'geography',
    gameState,
  };
}

function nextQuestion(isAnswerCorrect: boolean): Lazy<Promise<Array<Action>>> {
  return async () => {
    if (isAnswerCorrect) confetti();
    await delay(1500);
    return [nextQuestionAction()];
  };
}

function newGame(data: Array<QuestionItem>): Lazy<Promise<Array<Action>>> {
  return async () => {
    const numQuestions = 6;
    const questions = makeQuestions(numQuestions, data);
    return [newGameAction(questions, data)];
  };
}

function newGameFirst(category: Category): Lazy<Promise<Array<Action>>> {
  return async () => {
    const data = databaseQuestions[category];
    const actions = await newGame(data)();
    return actions;
  };
}

export const reducer: AsyncReducer<State, Action> = (state, action) => {
  if (action.tag === 'category_set') {
    return noEffects({ ...state, category: action.category });
  }
  if (action.tag === 'start_game') {
    const questions = state.questionItems.get(state.category);
    if (questions) {
      return { state, effects: [newGame(questions)] };
    } else {
      return { state, effects: [newGameFirst(state.category)] };
    }
  }

  if (action.tag === 'new_game') {
    const [firstQuestion, ...restQuestions] = action.questions;
    const gameState: GameState = {
      tag: 'in_progress',
      answeredQuestions: [],
      currentQuestion: firstQuestion,
      currentAnswer: undefined,
      nextQuestions: restQuestions,
    };
    return noEffects({
      ...state,
      gameState,
      questionItems: state.questionItems.set(
        state.category,
        action.questionItems
      ),
    });
  }

  if (action.tag === 'answer') {
    if (
      state.gameState.tag === 'before_start' ||
      state.gameState.tag === 'ended'
    )
      return noEffects(state);
    if (state.gameState.currentAnswer !== undefined) return noEffects(state); // already answered

    const newState = {
      ...state,
      gameState: { ...state.gameState, currentAnswer: action.answer },
    };
    return {
      state: newState,
      effects: [
        nextQuestion(
          action.answer === state.gameState.currentQuestion.correctOption
        ),
      ],
    };
  }

  if (action.tag === 'next_question') {
    if (
      state.gameState.tag === 'before_start' ||
      state.gameState.tag === 'ended'
    )
      return noEffects(state);
    if (state.gameState.currentAnswer === undefined) return noEffects(state); // not answered yet!!

    const answeredQuestion: AnsweredQuestion = {
      question: state.gameState.currentQuestion,
      answer: state.gameState.currentAnswer,
    };
    const answeredQuestions = [
      answeredQuestion,
      ...state.gameState.answeredQuestions,
    ];
    if (state.gameState.nextQuestions.length <= 0) {
      // end of game
      return noEffects({
        ...state,
        gameState: { answeredQuestions, tag: 'ended' },
      });
    }
    const [head, ...tail] = state.gameState.nextQuestions;
    const newGameState = {
      ...state.gameState,
      answeredQuestions,
      currentQuestion: head,
      currentAnswer: undefined,
      nextQuestions: tail,
    };
    return noEffects({ ...state, gameState: newGameState });
  }

  if (action.tag === 'try_again') {
    return noEffects({ ...state, gameState: { tag: 'before_start' } });
  }

  return { state: state, effects: [] };
};
