import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShainichiranComponent } from './shainichiran.component';

describe('ShainichiranComponent', () => {
  let component: ShainichiranComponent;
  let fixture: ComponentFixture<ShainichiranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShainichiranComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShainichiranComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
