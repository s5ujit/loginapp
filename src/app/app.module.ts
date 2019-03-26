import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


import {jobListComponent} from './automation/job-list.component';
import {Http, HttpModule} from '@angular/http'
import { HomeComponent } from './automation/home.component';
import { jobDetailComponent } from './automation/job-details.component';
import { jobDeatilsGurad } from './automation/job-guard.service';
import { AddjobComponent } from './automation/add-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { jobFilterPile } from './automation/job-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    jobListComponent,
    HomeComponent,
    jobDetailComponent,
    AddjobComponent,
    jobFilterPile
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},      
      { path:'jobs',component:jobListComponent},
      {path:'job/:id',canActivate:[jobDeatilsGurad],component:jobDetailComponent},
      { path:'newjobs',component:AddjobComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'},
      
    ])
  ],
  providers: [jobDeatilsGurad],
  bootstrap: [AppComponent]
})
export class AppModule { }
