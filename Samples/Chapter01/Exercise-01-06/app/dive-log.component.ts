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
    // Dives and stock dives are arrays of dictionaries.

    public dives = [];
    private _index = 0;
    private _stockDives = [
        {
          site: 'Abu Gotta Ramada',
          location: 'Hurghada, Egypt',
          depth: 72,
          time: 54
        },
        {
          site: 'Ponte Mahoon',
          location: 'Maehbourg, Mauritius',
          depth: 54,
          time: 38
        },
        {
          site: 'Molnar Cave',
          location: 'Budapest, Hungary',
          depth: 98,
          time: 62
        }
    ];

    // Criteria for adding a dive
    public enableAdd() {
        return this._index < this._stockDives.length;
    }

    public addDive() {
        if (this.enableAdd()) {
            this.dives.push(this._stockDives[this._index++])
            // Remember this trick from cpro?
            // pushing to the next index and updating at the same time.
            // Also, I just need to change the array for the display to change!
            // How cool is that?
        }
    }

    public clearDives() {
        this.dives = [];
        this._index = 0;
    }
    
}

//this is a dive component object, that contains 
//an array of dives, an index of the dives, etc.
// the object also contains methods.

//typescript objects are actually class instances, thank gods for that.



        
    