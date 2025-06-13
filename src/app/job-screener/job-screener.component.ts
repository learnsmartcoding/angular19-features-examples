import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { answerJobQuestion, goToPreviousJobQuestion, resetJobScreener } from '../store/job-screener/job.action';
import { selectCurrentJobQuestion, selectJobAnswers } from '../store/job-screener/job.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-job-screener',
  imports: [CommonModule,FormsModule, ],
  templateUrl: './job-screener.component.html',
  styleUrl: './job-screener.component.css'
})
export class JobScreenerComponent {
 currentQuestion$: Observable<number>;
  answers$: Observable<{ [key: number]: string }>;

  constructor(private store: Store) {
    // Now that 'store' is initialized, you can safely assign these
    this.currentQuestion$ = this.store.select(selectCurrentJobQuestion);
    this.answers$ = this.store.select(selectJobAnswers);
  }
  questions = [
    { id: 1, text: 'Do you enjoy solving coding problems?' },
    { id: 2, text: 'Are you interested in creating UI layouts?' },
    { id: 3, text: 'Do you like planning and coordinating tasks?' },
    { id: 4, text: 'Do you prefer analyzing data over building UI?' }
  ];

  

  onSelect(questionId: number, answer: string) {
    this.store.dispatch(answerJobQuestion({ questionNumber: questionId, answer }));
  }

  goBack() {
    this.store.dispatch(goToPreviousJobQuestion());
  }

  reset() {
    this.store.dispatch(resetJobScreener());
  }

  getRecommendation(answers: { [key: number]: string }): string {
    const a = answers;
    if (a[1] === 'Yes' && a[2] === 'No' && a[3] === 'No' && a[4] === 'No') return 'Developer';
    if (a[1] === 'No' && a[2] === 'Yes' && a[3] === 'No' && a[4] === 'No') return 'UI/UX Designer';
    if (a[1] === 'No' && a[2] === 'No' && a[3] === 'Yes' && a[4] === 'No') return 'Project Manager';
    if (a[1] === 'No' && a[2] === 'No' && a[3] === 'No' && a[4] === 'Yes') return 'Business Analyst';
    return 'Hybrid Role';
  }
}
