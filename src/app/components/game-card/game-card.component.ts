import { Component, Input, OnInit } from '@angular/core';
import { GameCard } from 'src/app/models/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() card: GameCard;
  side = 'back'

  constructor() { }

  flip() {
    this.side = this.side === 'back' ? 'front' : 'back';
  }

  ngOnInit(): void {
  }

}
