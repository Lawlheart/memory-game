import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameCard } from 'src/app/models/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() card: GameCard = {symbol: 'heart', color: 'red'};
  @Output() choose = new EventEmitter<GameCard>();
  side = 'back'

  constructor() { }

  flip() {
    this.side = this.side === 'back' ? 'front' : 'back';
    if (this.side === 'front') {
      this.choose.emit()
    }
  }

  ngOnInit(): void {
  }

}
