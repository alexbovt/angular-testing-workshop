import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')
  @HostBinding('style.background')
  backgroundColor = 'transparent';

}
