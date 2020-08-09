import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SloginComponent } from './slogin/slogin.component';
import { DeptInternalComponent } from './dept-internal/dept-internal.component';
import { InternalComponent } from './internal/internal.component';
import { CampExternalComponent } from './camp-external/camp-external.component';
import { ExternalComponent } from './external/external.component';
import { PbComponent } from './pb/pb.component';
import { PbviewComponent } from './pbview/pbview.component';

@NgModule({
  declarations: [
    AppComponent,
    SloginComponent,
    DeptInternalComponent,
    InternalComponent,
    CampExternalComponent,
    ExternalComponent,
    PbComponent,
    PbviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
