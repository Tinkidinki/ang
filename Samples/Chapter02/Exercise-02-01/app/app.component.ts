import {Component} from '@angular/core';

// You either give a path to the template or the template itself.
// Notice how the template is in ticks.
@Component({
  selector: 'yw-app',
  template: `
    <div class="container-fluid">
      <h1>Dive Site Maintenance</h1>
      <site-list-view></site-list-view>
    </div>
  `
})
export class AppComponent {
}