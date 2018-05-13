import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {VideoService} from './video.service'
import { IVideo } from './video';
@Component({
    moduleId:module.id,
    templateUrl:'video-details.component.html'
})
export class VideoDetailComponent implements OnInit{
    pageTitle: string='Video Details';
    video:IVideo;
    errorMessage:string;
    constructor(private _router:ActivatedRoute,private _VideoService:VideoService)
    {
        
    }
    ngOnInit():void{
        //console.log('i am using componenet lyf cycle hook....!');
        this._VideoService.getVideosById('1')
        .subscribe(videos=>this.video=videos,
        error=>this.errorMessage=<any>error);
    }
}