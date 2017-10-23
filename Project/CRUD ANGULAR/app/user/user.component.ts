import { Component, OnInit } from '@angular/core';
import {User} from './user';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:Array<User>=[
    // new User(1,"First","Last","email@gmail.com"),
    // new User(1,"First","Last","email@gmail.com"),
    // new User(1,"First","Last","email@gmail.com")
  ];
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  create(user:User){
    this.users.push(user);
  }

  getUsers(){
    this._userService.getUsers()
    .then(users => this.users= users)
    .catch(err=>console.log(err))
  }

  destroy(user:User){
    const i = this.users.indexOf(user);
    this.users.splice(i,1);
  }

}
