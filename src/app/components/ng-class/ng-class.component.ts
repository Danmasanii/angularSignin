import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  isSidePanel: boolean;
  panelName: string;
  studentList: any [];
  constructor(private router:Router) {
    this.panelName = 'List';
    this.studentList = [];
    this.isSidePanel = true;
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
  gotoStyle() {
    this.router.navigateByUrl('/ngstyle');
  }
  showCreatePanel() {
    this.panelName = 'Create';
  }
  closeCreatePanel() {
    this.panelName = 'List';
  }
  openSidePanel() {
    this.isSidePanel = true;
  }
  closeSidePanel() {
    this.isSidePanel = false;
  }

   
  getClassName() {
    if (this.isSidePanel) {
      return 'col-md-8';
    } else {
      return 'col-md-12';
    } 
  }
}
