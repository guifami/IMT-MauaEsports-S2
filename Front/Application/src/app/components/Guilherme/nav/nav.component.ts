import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  menuClick(){
    this.isCollapsed = !this.isCollapsed;
  }

  nav_scroll = false;
  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.nav_scroll=true;
    }
    else{
      this.nav_scroll=false;
    }
  }
}
