import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()

export class jobDeatilsGurad implements CanActivate{
    constructor(private _router:Router)
    {

    }
    canActivate(route:ActivatedRouteSnapshot):boolean{
        let id=+route.url[1].path;
        if(isNaN(id)||id<0)
        {
            alert('Invalid job id');
            this._router.navigate(['/jobs']);
        }
        return true;
    }
}