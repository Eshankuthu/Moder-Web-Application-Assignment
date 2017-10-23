import { Component, OnInit,Input } from '@angular/core';
import { User } from './../user';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() user : User;
  userEdit : User = new User();
  constructor() { }

  ngOnInit() {
    Object.assign(this.userEdit,this.user);
    console.log(this.userEdit);
  }

}
