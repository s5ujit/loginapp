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
            bde_sitename:'',
            bdedsn:'',
            created:'',
            esx_pass:'',
            esx_server:'',
            esx_user:'',
            fixlet_id:0,
            jobid:'',
            jobtype:'',
            lastUpdate:'',
            mui:false ,
            pid:'',
            pid_new:'',
            remove_url_structure:false ,
            run_check:false ,
            run_check_new:'',
            runid:0 ,
            runid_new:'',
            scheduled:'',
            state:'',
            state_new:'',
            version:0 ,
            vmsafety_off:false 
           
        });
    }
    addjob(body:any)
    {
       
        this._jobService.addjob(body).subscribe();
    }
}