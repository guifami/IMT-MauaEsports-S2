import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Jogos',
  templateUrl: './Jogos.component.html',
  styleUrls: ['./Jogos.component.css']
})
export class JogosComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
