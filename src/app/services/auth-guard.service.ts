import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){
    let user = localStorage.getItem('loggedUser');
    if(user){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
