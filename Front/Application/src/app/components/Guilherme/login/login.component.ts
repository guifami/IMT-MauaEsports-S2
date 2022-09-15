import { Component, OnInit } from '@angular/core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  faEnvelope = faEnvelope
  faKey = faKey
  constructor() { }

  ngOnInit() {
  }

}
