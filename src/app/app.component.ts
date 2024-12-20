import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MovieSearchComponent } from "./movie-search/movie-search.component";
import { MovieRecommendationComponent } from "./movie-recommendation/movie-recommendation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19_features';
}
