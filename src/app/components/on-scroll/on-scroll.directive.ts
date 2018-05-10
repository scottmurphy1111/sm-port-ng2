import { Directive, HostListener, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[portOnScroll]'
})
export class OnScrollDirective implements OnInit {

  onScroll = this;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    // let onScroll = this;
    // console.log('jflk;aj');
    console.log(window);
  }

  
  
  isWheel: boolean;
  movingPanel: boolean;

  @HostListener('wheel', ['$event']) wheel(e) {      
        
    //element.bind("wheel", function(e) {
      

        let enterBtn = document.querySelector('.enter'),
            nextPanel = this.el.nativeElement.nextElementSibling,
            prevPanel = this.el.nativeElement.previousElementSibling,
            currentNav = document.querySelectorAll('.vert-nav li.active')[0],                
            nextNav = document.querySelectorAll('.vert-nav li.active')[0].nextElementSibling,
            prevNav = document.querySelectorAll('.vert-nav li.active')[0].previousElementSibling,
            movement = 0;
        
          movement = e.deltaY;
        
            
          if(e.deltaMode === 1) {
              movement = movement * 8;
          }
            
          if(movement > 100 && nextNav) {                  
              
              if(this.isWheel) {
                  return;
              } 
              
              this.onScroll.isWheel = true;
              
              var movePanelDown = function() {
                console.log(this.el.nativeElement);
                  
                  if(this.el.nativeElement.className.indexOf('top-panel') > -1) {
                      enterBtn[0].classList.remove('load-icon', 'load-icon-instantly');
                  }
                  
                  this.el.nativeElement.removeClass('load-content fade-in').addClass('fade-out');
                  nextPanel.addClass('fade-in').removeClass('fade-out');  

                  finishMovingDown();
              };

              
              var finishMovingDown = function() {
                  if(this.movingPanel) {
                      return;
                  } else {
                      nextNav.classList.add('active');
                      currentNav.classList.remove('active');
                      
                      setTimeout(function() {
                          this.onScroll.isWheel = false;
                          this.onScroll.movingPanel = false;
                      },600);
                  }
                  };

              movePanelDown();
          }

            
        //     if(movement < -100 && prevNav) {
        //         if(this.isWheel) {  
        //             return;
        //         } 
                
        //         this.isWheel = true;
                
        //         var movePanelUp = function() {
        //             if(element[0].className.indexOf('second-panel') > -1) {
        //                 enterBtn[0].classList.add('load-icon-instantly');
        //             }

        //             element.removeClass('load-content fade-in').addClass('fade-out');  
        //             angular.element(prevPanel)[0].classList.add('fade-in');
        //             angular.element(prevPanel)[0].classList.remove('fade-out');
                    
        //             finishMovingUp();
        //         };

        //         var finishMovingUp = function() {
        //             if(this.movingPanel) {
        //                 return;
        //             } else {
        //                 prevNav.classList.add('active');
        //                 currentNav.classList.remove('active');
                        
        //                 $timeout(function() {
        //                 this.isWheel = false;
        //                 this.movingPanel = false;
        //                 },600);
        //             }
        //         };

        //         movePanelUp();
        //     }
        // });

        
        // var startX,
        // startY,
        // dist,
        // startTime;
      
        
        // element.bind('touchstart', function(e) {
        //     var touchobj = e.changedTouches[0];

        //     dist = 0,
        //     startX = touchobj.pageX,
        //     startY = touchobj.pageY,
        //     startTime = Date.now();
        
        // });

        
        // element.bind('touchmove', function(e){
        //     e.preventDefault();
        // });
  
        
        // element.bind('touchend', function(e){
        //     var touchobj = e.changedTouches[0],
        //     dist = touchobj.pageY - startY,
        //     enterBtn = $document[0].querySelectorAll('.enter'),
        //     nextPanel = element.next(),
        //     prevPanel = element[0].previousElementSibling,
        //     currentNav = $document[0].querySelectorAll('.vert-nav li.active')[0],
        //     nextNav = $document[0].querySelectorAll('.vert-nav li.active')[0].nextElementSibling,
        //     prevNav = $document[0].querySelectorAll('.vert-nav li.active')[0].previousElementSibling;

            
        //     if(dist < -100 && nextNav) {
        //         if(this.isWheel) {  
        //             return;
        //         } 
            
        //         this.isWheel = true;

        //         var movePanelDown = function() {
        //             if(element[0].className.indexOf('top-panel') > -1) {
        //                 enterBtn[0].classList.remove('load-icon', 'load-icon-instantly');
        //             }

        //             element.removeClass('load-content fade-in').addClass('fade-out');
        //             nextPanel.addClass('fade-in').removeClass('fade-out');  

        //             finishMovingDown();
        //         };

        //         var finishMovingDown = function() {
        //             if(this.movingPanel) {
        //                 return;
        //             } else {
        //                 nextNav.classList.add('active');
        //                 currentNav.classList.remove('active');
                        
        //                 $timeout(function() {
        //                     this.isWheel = false;
        //                     this.movingPanel = false;
        //                 },600);
        //             }
        //         };

        //         movePanelDown();
        //     }

            
        //     if(dist > 100 && prevNav) {
        //         if(this.isWheel) {  
        //             return;
        //         } 
                
        //         this.isWheel = true;
                
        //         var movePanelUp = function() {
        //             if(element[0].className.indexOf('second-panel') > -1) {
        //                 enterBtn[0].classList.add('load-icon-instantly');
        //             }

        //             element.removeClass('load-content fade-in').addClass('fade-out');  
        //             angular.element(prevPanel)[0].classList.add('fade-in');
        //             angular.element(prevPanel)[0].classList.remove('fade-out');
                    
        //             finishMovingUp();
        //         };

        //         var finishMovingUp = function() {
        //             if(this.movingPanel) {
        //                 return;
        //             } else {
        //                 prevNav.classList.add('active');
        //                 currentNav.classList.remove('active');
                        
        //                 $timeout(function() {
        //                     this.isWheel = false;
        //                     this.movingPanel = false;
        //                 },600);
        //             }
        //         };

        //         movePanelUp();
        //     }
//        });
    //}
    
  };

}
