import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DiveSite} from './dive-site';
import {SiteManagementService} from './site-management.service';

@Component({
  selector: 'delete-site-view',
  templateUrl: 'app/delete-site.template.html'
})
export class DeleteSiteComponent {
  @Output() onClosed = new EventEmitter();
  private _siteId: number;
  siteName: string;

  @Input() set siteId(id: number){
    this._siteId = id;
    this.siteName = this.siteService.getSiteById(id).name;
  }

  constructor(private siteService: SiteManagementService){

  }

  delete() {
    console.log("DELETE got called siteid" + this._siteId);
    this.siteService.deleteSite(this._siteId);
    this.onClosed.emit(null);
  }

  cancel() {
    this.onClosed.emit(null);
  }
}