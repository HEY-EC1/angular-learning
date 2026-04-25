import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shainichiran } from './shainichiran.component';

describe('Shainichiran', () => {
  let component: Shainichiran;
  let fixture: ComponentFixture<Shainichiran>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shainichiran],
    }).compileComponents();

    fixture = TestBed.createComponent(Shainichiran);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
