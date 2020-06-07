import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  text;
  imagePath = 'assets/img/1.jpg';
  constructor(private service: ContentService) { 
    this.text = this.service.getContent();
  }

  ngOnInit(): void {
  }

}
