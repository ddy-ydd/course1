import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { MeetingComponent } from './meeting/meeting.component';

const routes: Routes = [
  {path:"", redirectTo:'/dashboard', pathMatch:'full'},
  {path:"dashboard", component:DashboardComponent, children:
  [
    {path:"dashboard", redirectTo:'/dashboard', pathMatch:'full'},
    {path:"form", component:FormComponent, data: {title:"Client Form"}},
    {path:"meeting", component:MeetingComponent, data: {title:"Meetings"}}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
