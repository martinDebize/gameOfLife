import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})
export class GameButtonComponent implements OnInit {
  @Input()
  width: number;
  @Input()
  height: number;
  @Input()
  title: string;

  constructor() {}

  ngOnInit() {}
}
