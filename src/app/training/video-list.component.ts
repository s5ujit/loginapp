import {Component,OnInit } from '@angular/core';
import {IVideo} from './video';
import {VideoService} from './video.service'

@Component({
   
    moduleId:module.id,
    templateUrl:'video-list.component.html',
    styleUrls:['video-list.component.css']
})
export class VideoListComponent implements OnInit{

    myVideos:IVideo[];
    listFilter:string;
    constructor(private _VideoService:VideoService){

    }
    errorMessage:string;
    ngOnInit():void{
        //console.log('i am using componenet lyf cycle hook....!');
        this._VideoService.getVideos()
        .subscribe(videos=>this.myVideos=videos,
        error=>this.errorMessage=<any>error);
    }
}