import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-title',
  templateUrl: './game-title.component.html',
  styleUrls: ['./game-title.component.css']
})
export class GameTitleComponent implements OnInit {
  @Input() titulo!: string;

  constructor() { }

  ngOnInit() {
  }

}
