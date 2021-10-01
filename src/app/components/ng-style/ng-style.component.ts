import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  isSidePanel: boolean;
  panelName: string;
  studentList: any [];
  isModelOpen: boolean;
  textColor: string;
  customStyle = {
    fontSize: '3em',
    backgroundColor: 'ivory',
    color: 'maroon'
  }
  constructor() {
    this.panelName = 'List';
    this.studentList = [];
    this.textColor = '';
    this.isModelOpen = false;
    this.isSidePanel = false;
  }

  ngOnInit(): void {
    this.studentList = [
      {name:'Sachin', city:'Mumbai', stream: 'IT', attendance: 30,colorCode: '#db5a90'},
      {name:'Saurabh', city:'Kolkatta', stream: 'C-Tec',attendance: 50,colorCode: 'blueviolet'},
      {name:'Sehwag', city:'Delhi', stream: 'Mech',attendance: 40,colorCode: 'black' },
      {name:'Deepika', city:'Bhopal', stream: 'Electrical',attendance: 90,colorCode: '#cfac13' },
      {name:'Aniket', city:'Mumbai', stream: 'Electrical', attendance:70,colorCode: '#13cfcf'},
      {name:'Sayna', city:'Delhi', stream: 'Mech',attendance: 80,colorCode: '#de7ce6' },
      {name:'Virat', city:'Delhi', stream: 'IT',attendance: 90,colorCode: '#cedb5a' }
    ];
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
  toggleModel() {
    this.isModelOpen = !this.isModelOpen;
  }
  getModelStatus() {
    if (this.isModelOpen) {
      return {'display':'block'};
    } else {
      return {'display':'none'};
    } 
  }
   
  getStyle() {
    if (this.isSidePanel) {
      return 'display:block';
    } else {
      return 'display:none';
    } 
  }
}
