import { MovieserviceService } from '../movieservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  // Dependency Injection
  constructor(private service: MovieserviceService) {}
  name: string = this.service.Display('Vrock');

  ngOnInit(): void {}
}
