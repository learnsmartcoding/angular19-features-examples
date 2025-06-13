import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobState } from './job.reducer';

export const selectJobState = createFeatureSelector<JobState>('job');

export const selectCurrentJobQuestion = createSelector(
  selectJobState,
  (state) => state.currentQuestion
);

export const selectJobAnswers = createSelector(
  selectJobState,
  (state) => state.answers
);
