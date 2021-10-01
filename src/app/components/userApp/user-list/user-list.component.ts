import { Component, OnInit } from '@angular/core';
import { userObj } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: userObj [];
  constructor() {
    this.userList = [];
   }

  ngOnInit(): void {
    debugger;
    const records = localStorage.getItem('userList');
    if (records !==  null) {
      this.userList = JSON.parse(records);
    }
  }

  delete(id:any) {
    debugger;
    const oldRecords =  localStorage.getItem('userList');
    if (oldRecords !== null) { 
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a:any)=>a.userId == id),1); 
      localStorage.setItem('userList', JSON.stringify(userList));
    }
    const records = localStorage.getItem('userList');
    if (records !==  null) {
      this.userList = JSON.parse(records);
    }
  }
   

}
