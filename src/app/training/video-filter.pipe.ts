import { Pipe, PipeTransform } from "@angular/core";
import { IVideo } from "./video";



@Pipe({
    name:'videoFilter'
})
export class VideoFilterPile implements PipeTransform{
    transform(value:IVideo[],filterBy:string):IVideo[]{
        filterBy=filterBy?filterBy.toLocaleLowerCase():null;
        return filterBy?value.filter((video:IVideo)=>
        video.emailAddress.toLocaleLowerCase().indexOf(filterBy)!=-1):value;
    }

}