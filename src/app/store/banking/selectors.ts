import { createSelector, createFeatureSelector } from '@ngrx/store';
import { QuestionnaireState } from './reducer';

export const selectQuestionnaireState = createFeatureSelector<QuestionnaireState>('questionnaire');

export const selectAnswers = createSelector(
  selectQuestionnaireState,
  (state) => state.answers
);
