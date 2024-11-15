import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Basics';
  paragraph = 'This is a paragraph';

  person = {
    id: 1,
    firstName: 'Bob',
    lastName: 'Marley',
  };

  persons = [
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Marley',
    },
    {
      id: 2,
      firstName: 'Andy',
      lastName: 'Hogg',
    },
    {
      id: 3,
      firstName: 'Cindy',
      lastName: 'Smith',
    },
  ];
}
