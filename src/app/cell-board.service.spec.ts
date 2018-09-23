import { TestBed, inject } from '@angular/core/testing';

import { CellBoardService } from './cell-board.service';

describe('CellBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CellBoardService]
    });
  });

  it('should be created', inject([CellBoardService], (service: CellBoardService) => {
    expect(service).toBeTruthy();
  }));
});
