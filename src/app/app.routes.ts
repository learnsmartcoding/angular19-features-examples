import { Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieRecommendationComponent } from './movie-recommendation/movie-recommendation.component';
import { HomeComponent } from './home/home.component';
import { ContactUsReactiveComponent } from './signals/contact-us-reactive/contact-us-reactive.component';
import { SignalsBasicsComponent } from './signals/signals-basics/signals-basics.component';

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
  {
    path: 'contact-us',
    component: ContactUsReactiveComponent,
  },
  {
    path: 'what-are-signals',
    component: SignalsBasicsComponent,
  },
];
