import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gallaries',
  templateUrl: './gallaries.component.html',
  styleUrls: ['./gallaries.component.css']
})
export class GallariesComponent implements OnInit {

  itemLists: any = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if(this.router.url == '/gallaries/photos'){
      this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(
        (response)=>{
          this.itemLists = response;
        }
      )
    }
    else{
      this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
        (response)=>{
          this.itemLists = response;
        }
      )
    }
    
  }

}
