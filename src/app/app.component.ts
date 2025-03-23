import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MovieSearchComponent } from "./movie-search/movie-search.component";
import { MovieRecommendationComponent } from "./movie-recommendation/movie-recommendation.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 19 Features';
}
