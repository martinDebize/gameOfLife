import { Injectable } from '@angular/core';
import { Cell } from './cell';

@Injectable({
  providedIn: 'root'
})
export class CellService {
  toggle = (cell: Cell) => {
    cell.activated = !cell.activated;
  }

  deactivate = (cell: Cell) => {
    cell.activated = false;
  }

  activate = (cell: Cell) => {
    cell.activated = true;
  }

  constructor() {}
}
