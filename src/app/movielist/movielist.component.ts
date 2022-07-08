import { Movie } from './../movie';
import { MovieserviceService } from '../movieservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  moviedata: Movie[] = [];
  // Dependency Injection
  constructor(private service: MovieserviceService) {}
  name: string = this.service.Display('Vrock');
  getMovies() {
    return this.service.getMovies().subscribe((data) => {
      this.moviedata = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getMovies();
  }
}
