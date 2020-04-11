import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  isLoading: boolean = true;

  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart) {
        this.isLoading = true;
      }
      else if(routerEvent instanceof NavigationEnd) {
        this.isLoading = false;
      }
    })
   }

  ngOnInit() {
  }

}
