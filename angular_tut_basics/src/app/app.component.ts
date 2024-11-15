import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from './person';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, FormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Basics';
  paragraph = 'This is a paragraph';
  isDisabled = true;

  color_red: string = 'red';
  bg_color_class: string = 'bg_color';

  imageUrl =
    'https://cdn.pixabay.com/photo/2024/11/02/15/31/cat-9169528_1280.jpg';

  person: Person = {
    id: 1,
    firstName: 'Bob',
    lastName: 'Marley',
  };

  persons: Person[] = [
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

  userSaved() {
    console.log('User saved');
  }
}
