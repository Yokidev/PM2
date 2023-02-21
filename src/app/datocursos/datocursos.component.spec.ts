import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatocursosComponent } from './datocursos.component';

describe('DatocursosComponent', () => {
  let component: DatocursosComponent;
  let fixture: ComponentFixture<DatocursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatocursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatocursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
