import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TempStorageService } from 'src/app/services/temp-storage.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersForm: FormGroup;
  usersList;
  constructor(private storage: TempStorageService) { 
    this.usersList = this.storage.getStorage();
  }

  ngOnInit(): void {
    this.usersForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile: new FormControl(''),
      password: new FormControl('', [Validators.required])
    })
  }

  save(){
    if(this.storage.checkEmailExists(this.usersForm.value)){
      this.storage.setStorage(this.usersForm.value);
      alert("Users added successfully...");
      this.usersList = this.storage.getStorage();
    }
    else{
      alert("Email already exists");
    }

  }

}
