import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


import {VideoListComponent} from './training/video-list.component';
import {Http, HttpModule} from '@angular/http'
import { HomeComponent } from './training/home.component';
import { VideoDetailComponent } from './training/video-details.component';
import { VideoDeatilsGurad } from './training/video-guard.service';
import { AddVideoComponent } from './training/add-video.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoFilterPile } from './training/video-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    HomeComponent,
    VideoDetailComponent,
    AddVideoComponent,
    VideoFilterPile
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},      
      { path:'videos',component:VideoListComponent},
      {path:'video/:id',canActivate:[VideoDeatilsGurad],component:VideoDetailComponent},
      { path:'newvideos',component:AddVideoComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'},
      
    ])
  ],
  providers: [VideoDeatilsGurad],
  bootstrap: [AppComponent]
})
export class AppModule { }
