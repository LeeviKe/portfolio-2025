import { Component } from '@angular/core';
import { MeComponent } from './me/me.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [MeComponent, ProjectsComponent, NavbarComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
