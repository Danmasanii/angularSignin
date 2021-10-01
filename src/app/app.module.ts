import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './components/userApp/user-register/user-register.component';
import { UserListComponent } from './components/userApp/user-list/user-list.component';
import { UserUpdateComponent } from './components/userApp/user-update/user-update.component';
import { NaPipe } from './pipes/na.pipe';
 
const routeArray = [
  {
    path:'ngclass',
    component: NgClassComponent
  },
  {
    path: 'ngstyle',
    component: NgStyleComponent
  }, 
  {
    path: 'userList',
    component: UserListComponent
  }, 
  {
    path: 'addUser',
    component: UserRegisterComponent
  }, 
  {
    path: 'updateUser/:id',
    component: UserUpdateComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StructuralDirComponent,
    NgIfComponent,
    NgStyleComponent,
    NgClassComponent,
    UserRegisterComponent,
    UserListComponent,
    UserUpdateComponent,
    NaPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeArray)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
