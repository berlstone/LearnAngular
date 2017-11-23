
import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @Input('appInputFormat') appInputFormat: string;

  @HostListener('blur') onBlur(){

    let value : string = this.el.nativeElement.value;
    
    if(this.appInputFormat =='uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else if(this.appInputFormat =='emiratesid')
      this.el.nativeElement.value = value.blink();
    else 
      this.el.nativeElement.value = value;
  }
}
