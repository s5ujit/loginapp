import { Pipe, PipeTransform } from "@angular/core";
import { Ijob } from "./job";



@Pipe({
    name:'jobFilter'
})
export class jobFilterPile implements PipeTransform{
    transform(value:Ijob[],filterBy:string):Ijob[]{
        filterBy=filterBy?filterBy.toLocaleLowerCase():null;
        return filterBy?value.filter((job:Ijob)=>
        job.jobid.toLocaleLowerCase().indexOf(filterBy)!=-1):value;
    }

}