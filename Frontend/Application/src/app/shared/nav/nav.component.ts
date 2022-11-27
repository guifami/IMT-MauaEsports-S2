import { SubscriptionService } from 'src/app/resources/services/subscription.service';
import { LoginService } from 'src/app/resources/services/login.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  public username?: string;
  isCollapsed = false;
  faRightFromBracket = faRightFromBracket;

  constructor(private loginService: LoginService, private subscriptionService: SubscriptionService) { 
    this.username = this.loginService.username;
  }

  ngOnInit() {

  }

  menuClick(){
    this.isCollapsed = !this.isCollapsed;
  }

  checkUserIsLogged(): boolean{
    if(this.loginService.isLogged)
    {
      this.username = this.loginService.username;
      return true;
    }
    else
      return false;
  }

  logout(){
    this.loginService.isLogged = false;
    this.subscriptionService.requestIsSent = false;
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
