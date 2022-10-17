import { AlertService } from './../../resources/services/alert.service';
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

  constructor(private loginService: LoginService, private alertService: AlertService) { }

  ngOnInit() {
    this.requestLogin = new RequestLogin();
  }

  public submitLogin(): void{
    this.loginService.submitLogin(this.requestLogin).subscribe(data => {
      this.alertService.info('Funcionalidade ainda não implementada.', '');
    },
    error => {
      this.alertService.error('Usuário ou senha inválidos.', '');
      console.error(error);
    });
  }

}
