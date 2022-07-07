import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css'],
})
export class MycomponentComponent implements OnInit {
  name: string = 'Tom';
  age: number = 20;
  city: string = 'Chennai';

  fruits: string[] = ['Apple', 'Mango', 'Banana', 'Guava'];
  MStatus: boolean = true;

  constructor() {}

  Show(): void {
    alert('Name is ' + this.name);
  }

  ngOnInit(): void {}
}
