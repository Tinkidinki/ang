import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DiveLogComponent} from './dive-log.component';

// Looks like Ngmodule packs all these classes into a module.
// The classes are in the arrays of the fields of the json objects.
@NgModule({
    imports: [BrowserModule],
    declarations: [DiveLogComponent],
    bootstrap: [DiveLogComponent]
})

export class AppModule { }
