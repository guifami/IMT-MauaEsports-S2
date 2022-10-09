import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  faUser = faUser
  faEnvelope = faEnvelope
  faKey = faKey
  constructor() { }

  ngOnInit() {
  }

}
