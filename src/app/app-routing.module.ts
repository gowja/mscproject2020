import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptInternalComponent } from './dept-internal/dept-internal.component';
import { InternalComponent } from './internal/internal.component';
import { CampExternalComponent } from './camp-external/camp-external.component';
import { ExternalComponent } from './external/external.component';
import { PbComponent } from './pb/pb.component';
import { PbviewComponent } from './pbview/pbview.component';


const routes: Routes = [
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
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
