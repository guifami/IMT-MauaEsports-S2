import { LoginService } from 'src/app/resources/services/login.service';
import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser, faChevronDown, faGraduationCap, faTrophy, faPhone, faHeadset, faTriangleExclamation, faLock} from '@fortawesome/free-solid-svg-icons';
import { SubscriptionService } from 'src/app/resources/services/subscription.service';
import { RequestSubscription } from 'src/app/resources/models/Requests/RequestSubscription';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  public requestSubscription !: RequestSubscription
  public requestIsSent!: boolean;

  faLock = faLock
  faTriangleExclamation = faTriangleExclamation
  faUser = faUser
  faEnvelope = faEnvelope
  faChevronDown = faChevronDown
  faGraduationCap = faGraduationCap
  faTrophy = faTrophy
  faPhone = faPhone
  faHeadset = faHeadset

  constructor(private subscriptionService: SubscriptionService, private loginService: LoginService) { }

  ngOnInit() {
    this.requestSubscription = new RequestSubscription();
  }

  sendRequest(){
    console.log(this.requestSubscription.nome);
    console.log(this.requestSubscription.email);
    console.log(this.requestSubscription.celular);
    console.log(this.requestSubscription.curso);
    console.log(this.requestSubscription.equipe);
    console.log(this.requestSubscription.descricao);

    this.subscriptionService.validateForm(this.requestSubscription);
    if(this.subscriptionService.validateForm(this.requestSubscription))
    {
      this.subscriptionService.sendRequest();
      this.requestIsSent = this.subscriptionService.requestIsSent;
    }
  }

  checkRequestIsSent(): boolean{
    if(this.subscriptionService.requestIsSent)
      return true;
    else
      return false;
  }
  
  checkUserAuthToSub(): boolean{
    if(this.loginService.isLogged)
      return true;
    else
      return false;
  }
}
