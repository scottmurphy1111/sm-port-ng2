import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'port-vert-nav',
  templateUrl: './vert-nav.component.html',
  styleUrls: ['./vert-nav.component.scss']
})
export class VertNavComponent implements OnInit {

  @Input() loadMainContent: boolean;
  
  constructor() { }

  ngOnInit() {
    let vertNav = this;
    setTimeout(function() {
      vertNav.loadMainContent = true;
    //}, 800)
    });
  }

}
