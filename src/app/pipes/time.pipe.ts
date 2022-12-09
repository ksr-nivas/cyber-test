import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time'
})

export class TimePipe implements PipeTransform {
    transform(value: number): any {
        if(!value) return;

        const seconds = Math.floor((new Date().getTime() - value)/1000);
        if(seconds < 60) {
            return `${seconds} seconds ago`
        }
        
        const minutes = Math.floor((new Date().getTime() - value)/1000/60);
        if(minutes < 60) {
            return `${minutes} minutes ago`
        }

        const hours = Math.floor((new Date().getTime() - value)/1000/60/60);
        return `${hours} hours ago`
    }
}