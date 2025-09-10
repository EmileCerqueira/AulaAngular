import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SextoComponente } from './sexto-componente';

describe('SextoComponente', () => {
  let component: SextoComponente;
  let fixture: ComponentFixture<SextoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SextoComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SextoComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
