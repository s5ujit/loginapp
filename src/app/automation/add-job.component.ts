import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {jobService} from './job.service';
import { Ijob } from './job';
@Component({
    moduleId:module.id,
    templateUrl:'add-job.component.html'
})
export class AddjobComponent{
    pageTitle:string="Login";
    errorMessage:string;
    jobs:Ijob[];
    jobForm:FormGroup;
    constructor(private _builder:FormBuilder,private _jobService:jobService){
        this.createForm();
    }
    createForm(){
        this.jobForm=this._builder.group({
            emailAddress:'',
            passwordHash:''
           
        });
    }
    addjob(body:any)
    {
        this._jobService.addjob(body).subscribe();
    }
}