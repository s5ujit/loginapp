import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {VideoService} from './video.service';
import { IVideo } from './video';
@Component({
    moduleId:module.id,
    templateUrl:'add-video.component.html'
})
export class AddVideoComponent{
    pageTitle:string="Login";
    errorMessage:string;
    videos:IVideo[];
    videoForm:FormGroup;
    constructor(private _builder:FormBuilder,private _videoService:VideoService){
        this.createForm();
    }
    createForm(){
        this.videoForm=this._builder.group({
            emailAddress:'',
            passwordHash:''
           
        });
    }
    addVideo(body:any)
    {
        this._videoService.addVideo(body).subscribe();
    }
}