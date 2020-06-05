import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counts = [
    {
      name: 'EARNINGS (MONTHLY)',
      value: '$40,000',
      border: 'border-left-info',
      text: 'text-info'
    },
    {
      name: 'EARNINGS (ANNUAL)',
      value: '$240,000',
      border: 'border-left-primary',
      text: 'text-primary'
    },
    {
      name: 'EARNINGS (WEEKLY)',
      value: '$10,000',
      border: 'border-left-danger',
      text: 'text-danger'
    },
    {
      name: 'EARNINGS (DAILY)',
      value: '$4,000',
      border: 'border-left-info',
      text: 'text-info'
    },
    {
      name: 'TASKS',
      value: '50%',
      border: 'border-left-primary',
      text: 'text-primary'
    },
    {
      name: 'PENDING REQUESTS',
      value: '25',
      border: 'border-left-warning',
      text: 'text-warning'
    },
    {
      name: 'ACCEPT REQUESTS',
      value: '35',
      border: 'border-left-success',
      text: 'text-success'
    },
    {
      name: 'REJECT REQUESTS',
      value: '5',
      border: 'border-left-danger',
      text: 'text-danger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
