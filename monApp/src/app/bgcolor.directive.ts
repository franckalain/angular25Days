import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {

  constructor(private el: ElementRef, private _renderer: Renderer2)
  {
    this.changeColor('red');
  }

  changeColor(color: string) {
    this.this.el.nativeElement, 'color', color;
  }

}
