import { LoginService } from './../../resources/services/login.service';
import { RequestLogin } from './../../resources/models/RequestLogin';
import { Component, OnInit } from '@angular/core';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public requestLogin!: RequestLogin;

  faUser = faUser
  faEnvelope = faEnvelope
  faKey = faKey

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.requestLogin = new RequestLogin();
  }

  public submitLogin(): void{
    this.loginService.submitLogin(this.requestLogin).subscribe(data => {
      console.log(data);
    },
    error => {
      console.error(error);
    });
  }

}
