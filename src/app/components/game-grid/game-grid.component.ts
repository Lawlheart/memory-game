import { Component, OnInit } from '@angular/core';
import { cardset } from 'src/app/data/game';
import { shuffle } from 'src/app/helpers/game';
import { GameCard } from 'src/app/models/game';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss']
})
export class GameGridComponent implements OnInit {
  cards: GameCard[] = shuffle(cardset)

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
