import { Component,Input,Renderer2,ElementRef,OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges, OnInit, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  private renderer2;
  @Input() nbpConfiguration: any;
  @Input() _nbpWidth: any;
  @Input() _nbpOffset: any;
  @Input() text: string = "";
  progress: ElementRef;
  step: ElementRef;
  name: string;
  fullName: string = 'Angular';
  LastName = 'Angualr 12';

  rollNo: number;

  isIndian: boolean = true;

  currentDate: Date;

  student: any;

  cityArray: string [];
  minLength = 10;



  constructor(renderer2: Renderer2) {
    this.cityArray = ['Mumbai','Pune'];
    this.student = 123;
    this.student = 'Angular';
    this.student = {
      name: 'Hello',
      city: 'Mumbai'
    };
    this.rollNo = 222;
    this.currentDate = new Date();
    this.name = 'Hello';
    console.log(`constructor called`);
  }


  decrement() {
    this.rollNo --;
  }
  increment() {
    this.rollNo++;
  }
  ngOnChanges() {
    console.log(`ngOnChanges  `);
  }

  ngOnInit() {
    console.log(`ngOnInit   `);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
