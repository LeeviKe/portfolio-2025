import { Component } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  items = [
    {
      id: 1,
      name: 'Synerra',
      description:
        'A 5-month-long team project where we built a collaborative app for gamers to find other players to play with.',
      link: '/projects/synerra',
    },
    {
      id: 2,
      name: 'Guess the flag',
      description: 'A small mobile game for guessing flags.',
      link: '/projects/guess-the-flag',
    },
    {
      id: 3,
      name: 'Movie score quiz',
      description:
        'A game where you have to guess which one of 2 movies has the higher TMDB score.',
      link: '/projects/movie-score-quiz',
    },
    {
      id: 4,
      name: 'To-do-list',
      description:
        'A one week long teamproject where we learned team app development and built a simple to-do-list -app.',
      link: '/projects/to-do-list',
    },
  ];
}
