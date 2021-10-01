import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.css']
})
export class StructuralDirComponent implements OnInit {

  cityList: string[];
  city: string;
  studentList: any [];
  constructor() {
    this.studentList = [];
    this.cityList = ['Mumbai'];
    this.city = '';
  }

  addCity() {
    this.cityList.push(this.city);
  }
  
  ngOnInit(): void {
    this.studentList = [
      {name:'Sachin', city:'Mumbai', stream: 'IT' },
      {name:'Saurabh', city:'Kolkatta', stream: 'C-Tec' },
      {name:'Sehwag', city:'Delhi', stream: 'Mech' },
      {name:'Radhul', city:'Bhopal', stream: 'Electrical' }
    ];
  }

  getStudentList() {
    return this.studentList;
  }
  getCitys() {
    return this.cityList;
  }

}
