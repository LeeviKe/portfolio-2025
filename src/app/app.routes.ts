import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SynerraComponent } from './projectPages/synerra/synerra.component';
import { GuessTheFlagComponent } from './projectPages/guess-the-flag/guess-the-flag.component';
import { MovieScoreQuizComponent } from './projectPages/movie-score-quiz/movie-score-quiz.component';
import { ToDoListComponent } from './projectPages/to-do-list/to-do-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'projects', redirectTo: '' },

  { path: 'projects/synerra', component: SynerraComponent },
  { path: 'projects/guess-the-flag', component: GuessTheFlagComponent },
  { path: 'projects/movie-score-quiz', component: MovieScoreQuizComponent },
  { path: 'projects/to-do-list', component: ToDoListComponent },
];
