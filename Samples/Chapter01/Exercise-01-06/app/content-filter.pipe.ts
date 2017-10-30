import { Pipe, PipeTransform } from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

// From what I understand, a decorator works for the
// whole file you use.
// Like this pipe decorator specifies characteristics
// of this whole file.

// implements equivalent to inherits

//Here, the pipe decorator assigns metadata to the ContentFilterPipe class.
// We know now, that the class is a pipe, and its name is contentFilter.
@Pipe({name: 'contentFilter'})
export class ContentFilterPipe implements PipeTransform {
    transform(value: DiveLogEntry[], searchFor: string) :DiveLogEntry[] {
        if (!searchFor) return value;
        searchFor = searchFor.toLowerCase();
        return value.filter(dive =>
            dive.site.toLowerCase().indexOf(searchFor) >= 0 ||
            dive.location.toLowerCase().indexOf(searchFor) >= 0 ||
            dive.depth.toString().indexOf(searchFor) >= 0 ||
            dive.time.toString().indexOf(searchFor) >= 0);
        
    }
}
