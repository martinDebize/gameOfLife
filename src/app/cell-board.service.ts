import { Injectable } from '@angular/core';
import { Cell } from './cell';
import { CellService } from './cell.service';

@Injectable({
  providedIn: 'root'
})
export class CellBoardService {
  generate = (cellBoard: Cell[][]) => {
    const newCellBoard = this.initialize();
    for (let i = 0; i < cellBoard.length; i++) {
      for (let j = 0; j < cellBoard[i].length; j++) {
        let aliveNeighbours = 0;
        if (i > 0 && j > 0 && cellBoard[i - 1][j - 1].activated) {
          aliveNeighbours++;
        }
        if (i > 0 && cellBoard[i - 1][j].activated) {
          aliveNeighbours++;
        }
        if (
          i > 0 &&
          j < cellBoard[i].length - 1 &&
          cellBoard[i - 1][j + 1].activated
        ) {
          aliveNeighbours++;
        }
        if (j > 0 && cellBoard[i][j - 1].activated) {
          aliveNeighbours++;
        }
        if (j < cellBoard[i].length - 1 && cellBoard[i][j + 1].activated) {
          aliveNeighbours++;
        }
        if (
          i < cellBoard.length - 1 &&
          j > 0 &&
          cellBoard[i + 1][j - 1].activated
        ) {
          aliveNeighbours++;
        }
        if (i < cellBoard.length - 1 && cellBoard[i + 1][j].activated) {
          aliveNeighbours++;
        }
        if (
          i < cellBoard.length - 1 &&
          j < cellBoard[i].length - 1 &&
          cellBoard[i + 1][j + 1].activated
        ) {
          aliveNeighbours++;
        }
        if (!cellBoard[i][j].activated && aliveNeighbours === 3) {
          newCellBoard[i][j].activated = true;
        } else if (
          cellBoard[i][j].activated &&
          (aliveNeighbours === 2 || aliveNeighbours === 3)
        ) {
          newCellBoard[i][j].activated = true;
        } else {
          newCellBoard[i][j].activated = false;
        }
      }
    }
    return newCellBoard;
  }

  initialize = () => {
    const cellBoard = [];
    for (let i = 0; i < 30; i++) {
      cellBoard[i] = [];
      for (let j = 0; j < 30; j++) {
        cellBoard[i][j] = new Cell(false);
      }
    }
    return cellBoard;
  }

  constructor(private cellService: CellService) {}
}
