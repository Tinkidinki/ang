import {Component} from '@angular/core';

@Component({
  selector: 'yw-app',
  template: `
    <div class="container-fluid">
      <h1>Scuba Diving News</h1>
      <div [style.width.px]="200">
        <yw-menu #menu>
          <menu-section title="Red Sea">
            <menu-item title="News #1"></menu-item>
            <menu-item title="News #2"></menu-item>
            <menu-item title="News #3"></menu-item>
          </menu-section>
          <menu-section title="Caribbean">
            <menu-item title="News #4"></menu-item>
            <menu-item title="News #5"></menu-item>
            <menu-item title="News #6"></menu-item>
          </menu-section>
          <menu-section title="Pacific">
            <menu-item title="News #7"></menu-item>
            <menu-item title="News #8"></menu-item>
            <menu-item title="News #9"></menu-item>
          </menu-section>
        </yw-menu>
      </div>
      <h3>Selected: {{menu.selectedTitle}}</h3>
    </div>
  `
})
export class AppComponent {
}