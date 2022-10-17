import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { RequestRegister } from 'src/app/resources/models/RequestRegister';
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
      this.alertService.error('Todos os campos são obrigatórios', '');
      console.error(error);
    });
  }

}
