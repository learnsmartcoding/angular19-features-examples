import { createReducer, on } from '@ngrx/store';
import { answerJobQuestion, goToPreviousJobQuestion, resetJobScreener } from './job.action';


export interface JobState {
  currentQuestion: number;
  answers: { [key: number]: string };
}

export const initialState: JobState = {
  currentQuestion: 1,
  answers: {}
};

export const jobReducer = createReducer(
  initialState,
  on(answerJobQuestion, (state, { questionNumber, answer }) => ({
    currentQuestion: questionNumber + 1,
    answers: {
      ...state.answers,
      [questionNumber]: answer
    }
  })),
  on(goToPreviousJobQuestion, (state) => ({
    ...state,
    currentQuestion: state.currentQuestion > 1 ? state.currentQuestion - 1 : 1
  })),
  on(resetJobScreener, () => initialState)
);
