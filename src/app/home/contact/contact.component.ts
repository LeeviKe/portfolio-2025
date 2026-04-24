import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  copyNumber() {
    console.log('kass');
    const encoded = 'KzM1OCA0NCAwOTEgMjAyNQ==';
    const email = atob(encoded);
    navigator.clipboard.writeText(email);
  }

  copyEmail() {
    console.log('kass');
    const encoded = 'bGVldmlrZXNhbmVuQGdtYWlsLmNvbQ==';
    const email = atob(encoded);
    navigator.clipboard.writeText(email);
  }
}
