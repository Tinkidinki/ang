import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DiveSite} from './dive-site';

// The selector has to be defined in the same module as the component.
// We bound app.component, which contained the template, to the same module as this.

@Component({
	selector: 'site-list-view',
	templateUrl: 'app/site-list.template.html'
})
export class SiteListComponent {
	// So input is literally the 
	// data you input to the template, 
	// and output is what happens if the 
	// user does some action on the template.
	// But the event has to be binded with some
	// function. You can use the event emitter
	// in that function.
	site : DiveSite;
	@Input() sites: DiveSite[];
	@Output() onAdd = new EventEmitter();
	@Output() onEdit = new EventEmitter<DiveSite>();

	add() {
		this.onAdd.emit(null);
	}

	edit() {
		this.onEdit.emit(this.site)
	}
}