import {Component} from '@angular/core';
import {DiveSite} from './dive-site'

// You either give a path to the template or the template itself.
// Notice how the template is in ticks.
@Component({
  selector: 'yw-app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
  sites = DiveSite.FavoriteSites.slice(0);
  currentView = 'list';
  newSiteId: number;
  currentSite: DiveSite;

  navigateTo(view: string) {
    this.currentView = view;
  }
  // Think of navigate to, as actually navigating.
  // Don't worry about internals.

  startAdd() {
	  // function(s) {return s.id;}
	  // function(p,c) {return p < c ? c : p; }
	  this.newSiteId = this.sites.map(s => s.id).reduce((p,c) => p<c ? c:p)+1;
	  // why are they going overboard, 
	  // don't lists have a length function?
	  this.navigateTo('add');
  }

  // The template never worries about the id.

  siteAdded(newSiteName: string) {
	this.sites.push({id: this.newSiteId, name: newSiteName});
	this.navigateTo('list')

  }

  startEdit(site: DiveSite){
	  this.currentSite = {id: site.id, name: site.name};
	  this.navigateTo('edit');
  }

  siteSaved(site: DiveSite){
	  let oldSite = this.sites.filter(s => s.id == site.id)[0];
	  if (oldSite) {
		  oldSite.name = site.name
	  }
	  this.navigateTo('list');
  }


}