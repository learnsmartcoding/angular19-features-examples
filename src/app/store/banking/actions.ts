import { createAction, props } from '@ngrx/store';

export const answerQuestion = createAction(
  '[Questionnaire] Answer Question',
  props<{ questionNumber: number; answer: string }>()
);
