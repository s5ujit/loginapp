import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()

export class VideoDeatilsGurad implements CanActivate{
    constructor(private _router:Router)
    {

    }
    canActivate(route:ActivatedRouteSnapshot):boolean{
        let id=+route.url[1].path;
        if(isNaN(id)||id<0)
        {
            alert('Invalid video id');
            this._router.navigate(['/videos']);
        }
        return true;
    }
}