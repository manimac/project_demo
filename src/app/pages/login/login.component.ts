import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  login(){
    let resultData = false;
    let storage = localStorage.getItem('users');
    if(storage){
      let data = JSON.parse(storage);
      for(let i =0;i<data.length;i++){
        if(this.loginForm.value.email == data[i].email && this.loginForm.value.password == data[i].password)
        {
          resultData = true;
        }
      }
    }
    if(resultData){
      localStorage.setItem('loggedUser',JSON.stringify(this.loginForm.value));
      this.router.navigate(['/home']);
    }
    else{
      alert("Invalid credentials");
    }
  }

}
