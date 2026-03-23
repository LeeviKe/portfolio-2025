import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-to-do-list',
  imports: [NavbarComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {}
