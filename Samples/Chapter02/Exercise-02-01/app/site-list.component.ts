import {Component} from '@angular/core';
import {DiveSite} from './dive-site';

// The selector has to be defined in the same module as the component.
// We bound app.component, which contained the template, to the same module as this.

@Component({
  selector: 'site-list-view',
  templateUrl: 'app/site-list.template.html'
})
export class SiteListComponent {
  sites = DiveSite.FavoriteSites;
}