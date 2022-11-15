import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { LayoutComponent } from './common-layout/layout/layout.component';
import { DashboardComponent } from './help-desk/dashboard/dashboard.component';
import { GeneralInfoComponent } from './help-desk/general-info/general-info.component';
import { ManageAccountComponent } from './help-desk/manage-account/manage-account.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {
  //   path: 'login', component: LoginComponent
  // },
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'general-Information',
        component:GeneralInfoComponent
      },
      {
        path:'user-account',
        component:ManageAccountComponent
      },
    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
