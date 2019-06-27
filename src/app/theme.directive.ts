import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
@Directive({
  selector: '[dtTheme]'
})
export class ThemeDirective implements OnChanges {
  @Input('dtTheme') theme: string;
  constructor(private el: ElementRef<HTMLElement>) {
  }
  ngOnChanges() {
    this.el.nativeElement.setAttribute('class', this.theme);
  }
}
