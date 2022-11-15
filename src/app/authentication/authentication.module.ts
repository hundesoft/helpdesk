import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CommonLayoutModule } from '../common-layout/common-layout.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CommonLayoutModule
  ]
})
export class AuthenticationModule { }
