import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CellBoardComponent } from './cell-board/cell-board.component';
import { GameButtonComponent } from './game-button/game-button.component';

@NgModule({
  declarations: [AppComponent, CellBoardComponent, GameButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
