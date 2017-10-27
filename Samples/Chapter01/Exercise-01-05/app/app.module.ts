import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveLogComponent} from './dive-log.component';
import {ContentFilterPipe} from './content-filter.pipe'

// Looks like Ngmodule packs all these classes into a module.
// The classes are in the arrays of the fields of the json objects.

// NEW REALIZATION: a decorator assigns metadata to the class
// defined just below it.
// "decorates" the class with metadata, if you will.

// I'm guessing this means that AppModule class is a module.
@NgModule({
    imports: [BrowserModule],
    declarations: [
        DiveLogComponent,
        ContentFilterPipe
    ],
    bootstrap: [DiveLogComponent]
})

export class AppModule { }

// All the other classes have to go into the declaration in the app module.
