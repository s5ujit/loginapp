import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {jobService} from './job.service'
import { Ijob } from './job';
@Component({
    moduleId:module.id,
    templateUrl:'job-details.component.html'
})
export class jobDetailComponent implements OnInit{
    pageTitle: string='job Details';
    job:Ijob;
    errorMessage:string;
    constructor(private _router:ActivatedRoute,private _jobService:jobService)
    {
        
    }
    ngOnInit():void{
        //console.log('i am using componenet lyf cycle hook....!');
        this._jobService.getjobsById('8')
        .subscribe(jobs=>this.job=jobs,
        error=>this.errorMessage=<any>error);
    }
}