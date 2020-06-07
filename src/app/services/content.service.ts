import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(){
    return 'Content return from content service...';
  }
}
