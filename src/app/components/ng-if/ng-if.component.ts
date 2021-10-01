import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  isShow: boolean;
  studentList: any [];
  constructor() {
    this.studentList = [];
    this.isShow = false;
  }

  ngOnInit(): void {
    this.studentList = [
      {name:'Sachin', city:'Mumbai', stream: 'IT',isActive: true,gender:'male' },
      {name:'Saurabh', city:'Kolkatta', stream: 'C-Tec',isActive: false,gender:'male' },
      {name:'Sehwag', city:'Delhi', stream: 'Mech',isActive: true,gender:'male' },
      {name:'Deepika', city:'Bhopal', stream: 'Electrical',isActive: false,gender:'female' },
      {name:'Aniket', city:'Mumbai', stream: 'Electrical',isActive: true,gender:'male' },
      {name:'Sayna', city:'Delhi', stream: 'Mech',isActive: true,gender:'female' },
      {name:'Virat', city:'Delhi', stream: 'IT',isActive: false,gender:'male' }
    ];
  }

  show() {
    this.isShow = true;
  }
  hide() {
    this.isShow = false;
  }

  getVisibleValue() {
    return this.isShow;
  }
}
