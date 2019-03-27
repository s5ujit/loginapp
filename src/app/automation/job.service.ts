import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {Ijob} from './job';
@Injectable()
export class jobService{

   private _serverUrl='rest/job';
    constructor(private http:Http)
    {

    }
    getjobs():Observable<Ijob[]>{
        return this.http.get("rest/jobs")
                        .map((response:Response)=><Ijob[]>response.json())
                        .do(data=>console.log("All : "+JSON.stringify(data)))
                        .catch(this.handelError);
    }
    private handelError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error||'server error');

    }
    getjobsById(id):Observable<Ijob>{
        return this.http.get(this._serverUrl+"/"+id)
                        .map((response:Response)=><Ijob>response.json())
                        .do(data=>console.log("All : "+JSON.stringify(data)))
                        .catch(this.handelError);
    }
   addjob(body:any):Observable<Ijob[]>
   {
       let bodyString=JSON.stringify(body);
       let headers=new Headers({'Content-type':'application/json'});
       let options=new RequestOptions({headers:headers});
    return this.http.post(this._serverUrl,bodyString,options)
    .map((response:Response)=>response.headers.get('Authorisation'))
    .do(data=>console.log("All : "+data))
    .catch(this.handelError);
   } 
    
}
