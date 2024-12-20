import { Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieRecommendationComponent } from './movie-recommendation/movie-recommendation.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'search/movies', component: MovieSearchComponent },
  {
    path: 'search/movie/recommendation',
    component: MovieRecommendationComponent,
  },
];
