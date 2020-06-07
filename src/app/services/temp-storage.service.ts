import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempStorageService {

  constructor() { }

  setStorage(param){
    let storage = localStorage.getItem('users');
    let data = [];
    if(storage){
      data = JSON.parse(storage);     
    }
    data.push(param);
    localStorage.setItem('users', JSON.stringify(data));
  }

  getStorage(){
    let resultdata = null;
    let storage = localStorage.getItem('users');
    if(storage){
      resultdata = JSON.parse(storage);
    }
    return resultdata;
  }

  checkEmailExists(form){
    let resultdata = true;
    let storage = localStorage.getItem('users');
    if(storage){
      let data = JSON.parse(storage); 
      for(let  i = 0; i < data.length;i++){
        if(data[i].email == form.email){
          resultdata = false;
        }
      }      
    }
    return resultdata;
  }
}
