import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { RequestRegister } from 'src/app/resources/models/Requests/RequestRegister';
import { AlertService } from 'src/app/resources/services/alert.service';
import { RegisterService } from 'src/app/resources/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public requestRegister!: RequestRegister;

  faUser = faUser
  faEnvelope = faEnvelope
  faKey = faKey

  constructor(private registerService: RegisterService, private alertService: AlertService, private router: Router) { }

  ngOnInit() {
    this.requestRegister = new RequestRegister();
  }

  public submitRegister(): void{
    this.registerService.submitRegister(this.requestRegister).subscribe(data => {
      this.alertService.success('Usuário cadastrado com sucesso.', '');
      this.router.navigate(['login']);
    },
    error => {
      if(error.error.message == `O login '${this.requestRegister.login}' ja existe.`)
        this.alertService.error(`O Usuário '${this.requestRegister.login}' já existe.`, '');

      if(error.error.message == "Todos os campos sao necessarios")
        this.alertService.error('Todos os campos são obrigatórios.', '');

      if(error.error.message == "O campo confirmarSenha deve ser igual ao campo senha")
        this.alertService.error('As senhas não se conferem.', '');      

      if(error.error.message.login == "O campo 'Usuario' nao pode estar em branco")
        this.alertService.error('Usuário não pode estar em branco.', '');

      if(error.error.message.senha == "O campo 'senha' nao pode estar em branco")
        this.alertService.error('Senha não pode estar em branco.', '');

      if(error.error.message.email == "O campo 'email' nao pode estar em branco")
        this.alertService.error('email não pode estar em branco.', '');

      if(error.error.message.confirmarSenha == "O campo 'confirmarSenha' nao pode estar em branco")
        this.alertService.error('Confirmar senha não pode estar em branco.', '');

      console.error(error);
    });
  }

}
