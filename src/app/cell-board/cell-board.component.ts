import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell';
import { CellService } from '../cell.service';
import { CellBoardService } from '../cell-board.service';

@Component({
  selector: 'app-cell-board',
  templateUrl: './cell-board.component.html',
  styleUrls: ['./cell-board.component.css']
})
export class CellBoardComponent implements OnInit {
  cellBoard: Cell[][];
  stopped = false;

  toggleCell = cell => {
    this.cellService.toggle(cell);
  }

  start = () => {
    this.stopped = false;
    const generator = setInterval(() => {
      this.cellBoard = this.cellBoardService.generate(this.cellBoard);
      if (this.stopped) {
        clearInterval(generator);
      }
    }, 200);
  }

  stop = () => {
    this.stopped = true;
  }

  iterate = () => {
    this.cellBoard = this.cellBoardService.generate(this.cellBoard);
  }

  reset = () => {
    this.cellBoard = this.cellBoardService.initialize();
  }

  constructor(
    private cellService: CellService,
    private cellBoardService: CellBoardService
  ) {}

  ngOnInit() {
    this.cellBoard = this.cellBoardService.initialize();
  }
}
