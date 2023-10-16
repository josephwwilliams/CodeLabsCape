import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elemenRef: ElementRef, private render: Renderer2) {}

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

    let dropdownList =
      this.elemenRef.nativeElement.querySelector('.dropdown-menu');

    if (this.isOpen) {
      this.render.addClass(dropdownList, 'show');
    } else {
      this.render.removeClass(dropdownList, 'show');
    }
  }
}
