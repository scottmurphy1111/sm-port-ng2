import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[portVertNavItem]'
})
export class VertNavItemDirective {

  @Input() dataActive: string;

  constructor(private el: ElementRef) { 
    
  }

  @HostListener('click', ['$event']) onClick(e) {
    e.stopPropagation();
    
    let clickedLiVal = this.dataActive,
    currentActiveLi = document.querySelector('.vert-nav li.active'),
    allPanels = document.querySelectorAll('.sliding-panel'),
    activatePanel: any,
    enterBtn = document.querySelector('.enter');

    activatePanel = document.querySelector('.'+clickedLiVal);

    for(var i = 0; i < allPanels.length; i++) {
      allPanels[i].classList.add('fade-out');
      allPanels[i].classList.remove('fade-in');              
    }

    currentActiveLi.classList.remove('active');
    this.el.nativeElement.classList.add('active');
    activatePanel.classList.add('fade-in');
    activatePanel.classList.remove('fade-out');

    if(clickedLiVal === 'top-panel') {
      enterBtn.classList.add('load-icon-instantly');
    } else {
      enterBtn.classList.remove('load-icon', 'load-icon-instantly');
    }
  }
}


