import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-movie-recommendation',
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-recommendation.component.html',
  styleUrl: './movie-recommendation.component.css',
})
export class MovieRecommendationComponent {
  private genreSubject = new BehaviorSubject<string>('');
  private yearSubject = new BehaviorSubject<string>('');
  private ratingSubject = new BehaviorSubject<string>('');
  private localurl = 'http://localhost:7205/api/GetMovieRecommendations';
  private azureurl = 'https://rxjs-lsc.azurewebsites.net/api/GetMovieRecommendations?code=T37X7m8JyhlhxBPwlvazAaRYiuQiQNGAH31f0MmdVolqAzFuJBTJcg%3D%3D';

  recommendations$ = combineLatest([
    this.genreSubject,
    this.yearSubject,
    this.ratingSubject,
  ]).pipe(
    filter(([genre, year, rating]) => !!genre || !!year || !!rating), // Emit only if at least one preference exists
    map(([genre, year, rating]) => ({ genre, year, rating })),
    mergeMap((params) =>
      this.http.get<any[]>(
        this.azureurl,
        { params }
      )
    )
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  updateGenre(event: Event) {
    const input = event.target as HTMLInputElement;
    this.genreSubject.next(input.value);
  }

  updateYear(event: Event) {
    const input = event.target as HTMLInputElement;
    this.yearSubject.next(input.value);
  }

  updateRating(event: Event) {
    const input = event.target as HTMLInputElement;
    this.ratingSubject.next(input.value);
  }
}
