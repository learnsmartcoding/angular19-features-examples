import { createAction, props } from '@ngrx/store';

export const answerJobQuestion = createAction(
  '[Job Screener] Answer Question',
  props<{ questionNumber: number; answer: string }>()
);

export const goToPreviousJobQuestion = createAction('[Job Screener] Go To Previous Question');
export const resetJobScreener = createAction('[Job Screener] Reset');
