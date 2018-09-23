import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellBoardComponent } from './cell-board.component';

describe('CellBoardComponent', () => {
  let component: CellBoardComponent;
  let fixture: ComponentFixture<CellBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CellBoardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
