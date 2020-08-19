import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptInternalComponent } from './dept-internal/dept-internal.component';
import { InternalComponent } from './internal/internal.component';
import { CampExternalComponent } from './camp-external/camp-external.component';
import { ExternalComponent } from './external/external.component';
import { PbComponent } from './pb/pb.component';
import { PbviewComponent } from './pbview/pbview.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { LoginDeptComponent } from './login-dept/login-dept.component';
import { PbloginComponent } from './pblogin/pblogin.component';
import { SinternalComponent } from './sinternal/sinternal.component';
import { SgradecardComponent } from './sgradecard/sgradecard.component';
import { CamploginComponent } from './camplogin/camplogin.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'dlogin',component:LoginDeptComponent},
  {path:'pblogin',component:PbloginComponent},
  {path:'clogin',component:CamploginComponent},
  {path:'dept',component:DeptInternalComponent,
  children:[
    {path:"internal",component:InternalComponent}
  ]},
  {path:'camp',component:CampExternalComponent,
  children:[
    {path:'external',component:ExternalComponent}
  ]},
  {path:'pb',component:PbComponent,
  children:[
    {path:'pbview',component:PbviewComponent}
  ]},
  {path:'student',component:StudentComponent,
  children:[
    {path:'sinternal',component:SinternalComponent},
    {path:'sgrade',component:SgradecardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
