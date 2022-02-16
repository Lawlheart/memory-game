import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameGridComponent } from './components/game-grid/game-grid.component';

const routes: Routes = [
  {
    path: '',
    component: GameGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
