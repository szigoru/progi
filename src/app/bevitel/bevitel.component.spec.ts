import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevitelComponent } from './bevitel.component';

describe('BevitelComponent', () => {
  let component: BevitelComponent;
  let fixture: ComponentFixture<BevitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevitelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BevitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
