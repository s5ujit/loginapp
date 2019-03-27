import {Component,OnInit } from '@angular/core';
import {Ijob} from './job';
import {jobService} from './job.service'

@Component({
   
    moduleId:module.id,
    templateUrl:'job-list.component.html',
    styleUrls:['job-list.component.css']
})
export class jobListComponent implements OnInit{

    myjobs:Ijob[];
    listFilter:string;
    constructor(private _jobService:jobService){

    }
    errorMessage:string;
    ngOnInit():void{
        this._jobService.getjobs()
        .subscribe(jobs=>this.myjobs=jobs,
        error=>this.errorMessage=<any>error);
    }
}