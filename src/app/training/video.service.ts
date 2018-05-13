import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IVideo} from './video';
@Injectable()
export class VideoService{
   // private _serverUrl='http://marutivideo.azurewebsites.net/api/videos';
   private _serverUrl='http://35.154.115.218:8084/rest/login';
  // private _serverUrl='http://localhost:8084/rest/login';
    constructor(private http:Http)
    {

    }
    getVideos():Observable<IVideo[]>{
        return this.http.get(this._serverUrl)
                        .map((response:Response)=><IVideo[]>response.json())
                        .do(data=>console.log("All : "+JSON.stringify(data)))
                        .catch(this.handelError);
    }
    private handelError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error||'server error');

    }
    getVideosById(id):Observable<IVideo>{
        return this.http.get(this._serverUrl+"/"+id)
                        .map((response:Response)=><IVideo>response.json())
                        .do(data=>console.log("All : "+JSON.stringify(data)))
                        .catch(this.handelError);
    }
   addVideo(body:any):Observable<IVideo[]>
   {
    console.log("=========================================");
    console.log(JSON.stringify(body));
       let bodyString=JSON.stringify(body);
       let headers=new Headers({'Content-type':'application/json'});
       let options=new RequestOptions({headers:headers});
    return this.http.post(this._serverUrl,bodyString,options)
    .map((response:Response)=>response.headers.get('Authorisation'))
    .do(data=>console.log("All : "+data))
    .catch(this.handelError);
   } 
    
}
