import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser, faChevronDown, faGraduationCap, faTrophy, faPhone, faHeadset} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  faUser = faUser
  faEnvelope = faEnvelope
  faChevronDown = faChevronDown
  faGraduationCap = faGraduationCap
  faTrophy = faTrophy
  faPhone = faPhone
  faHeadset = faHeadset

  constructor() { }

  ngOnInit() {
  }

}
