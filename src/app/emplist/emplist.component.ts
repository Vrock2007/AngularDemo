import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
})
export class EmplistComponent implements OnInit {
  emps: Employee[] = [
    { id: 101, name: 'Billy', salary: 40000, dept: 'TR' },
    { id: 102, name: 'Tom', salary: 50000, dept: 'HR' },
    { id: 103, name: 'Henry', salary: 35000, dept: 'HR' },
    { id: 104, name: 'Jeremy', salary: 60000, dept: 'TR' },
    { id: 105, name: 'James', salary: 45000, dept: 'HR' },
  ];
  today: number = Date.now();

  constructor() {}

  weekdays: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  ngOnInit(): void {}
}
