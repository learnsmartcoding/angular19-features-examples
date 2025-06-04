import { createReducer, on } from '@ngrx/store';
import { answerQuestion } from './actions';

export interface QuestionnaireState {
  answers: { [key: number]: string };
}

const initialState: QuestionnaireState = {
  answers: {}
};

export const questionnaireReducer = createReducer(
  initialState,
  on(answerQuestion, (state, { questionNumber, answer }) => ({
    ...state,
    answers: {
      ...state.answers,
      [questionNumber]: answer
    }
  }))
);
