import { Movie } from '../movie';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
})
export class AddmovieComponent implements OnInit {
  // intializing movie component
  moviedata: Movie = { id: 0, name: '', year: 0, rating: 0 };
  constructor() {}

  Save(movie: Movie): void {
    console.log(movie);
  }

  ngOnInit(): void {}
}
