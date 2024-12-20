import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, switchMap, catchError, of } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
  movies: any[] = [];
  searchTerm = '';
  loading = false;
  errorMessage = '';

  private searchSubject = new Subject<string>();

  constructor(private movieService: MovieService) {
    this.searchSubject
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((query) => {
          this.loading = true;
          this.errorMessage = '';
          return this.movieService.searchMovies(query).pipe(
            catchError((error) => {
              this.errorMessage = error.message; // Display error message to user
              return of([]); // Return an empty list so the app remains functional
            })
          );
        })
      )
      .subscribe((results) => {
        this.movies = results;
        this.loading = false;
      });
  }

  onSearch(query: string): void {
    this.searchSubject.next(query);
  }
}
