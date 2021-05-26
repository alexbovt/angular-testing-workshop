import {Component} from '@angular/core';

@Component({
  selector: 'app-highlight-host',
  template: `
    <div [appHighlight]="colors.pink">Pink</div>
    <div [appHighlight]="colors.blue">Blue</div>
    <div [appHighlight]>Default (transparent)</div>
  `,
  styleUrls: ['./highlight-host.component.scss']
})
export class HighlightHostComponent {

  readonly colors = {
    pink: '#DE3163',
    blue: 'skyblue',
  };
}
