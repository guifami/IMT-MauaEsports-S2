import { RequestSubscription } from './../models/Requests/RequestSubscription';
import { LoginService } from 'src/app/resources/services/login.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  public requestIsSent!: boolean;

constructor(private alertService: AlertService, private router: Router,) { }

  sendRequest(){
    if(!this.requestIsSent)
    {
      this.requestIsSent = true;
      this.router.navigate(['home']);
      this.alertService.success('Solicitação enviada com sucesso! Aguarde enquanto verificamos seus registros.', '');
    }
    else
      this.alertService.error('Você já se inscreveu, estamos analisando seu perfil. Nossa equipe entrará em contato pelo seu e-mail. Boa sorte!', '');
  }

  validateForm(requestSubscription: RequestSubscription): boolean{

    if(requestSubscription.nome == undefined || requestSubscription.nome == '')
    {
      this.alertService.error('O Nome é obrigatório.', '');
      return false;
    }
    if(requestSubscription.email == undefined || requestSubscription.email == '')
    {
      this.alertService.error('O email é obrigatório.', '');
      return false;
    }
    if(requestSubscription.celular == undefined || requestSubscription.celular == '')
    {
      this.alertService.error('O Celular é obrigatório.', '');
      return false;
    }
    if(requestSubscription.curso == undefined || requestSubscription.curso == '')
    {
      this.alertService.error('O Curso é obrigatório.', '');
      return false;
    }
    if(requestSubscription.equipe == undefined || requestSubscription.equipe == '')
    {
      this.alertService.error('A Equipe é obrigatória.', '');
      return false;
    }
    if(requestSubscription.descricao == undefined || requestSubscription.descricao == '')
    {
      this.alertService.error('A Descrição é obrigatória.', '');
      return false;
    }
    return true;
  }
}
