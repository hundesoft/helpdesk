import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutModule } from '../common-layout/common-layout.module';
import { RouterModule } from '@angular/router';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
       GeneralInfoComponent,
       ManageAccountComponent,
       DashboardComponent
  ],
  imports: [
    CommonLayoutModule,
      ]
})
export class HelpDeskModule { }
