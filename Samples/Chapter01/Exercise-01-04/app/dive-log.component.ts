import {Component} from '@angular/core';

// So component decorator tells what
// part of the html page is controlled by 
// what template.

// here anything labelled divelog is controlled 
// by the divelog template.
@Component({
    selector: 'divelog',
    templateUrl: 'app/dive-log.template.html'
})


// And here is the data you give the template.
export class DiveLogComponent {
    public dives = [
        {
            site: 'Powai',
            location: 'Mumbai',
            depth: 4,
            time: 23
        },

        {
            site: 'Jog falls',
            location: 'Karnataka',
            depth: 7,
            time: 35
        },

        {
            site:'ValleyLand',
            location: 'MountainHill',
            depth: 45,
            time: 5
        }
    ];
}


        
    