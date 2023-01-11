import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiTareaComponent } from './edi-tarea.component';

describe('EdiTareaComponent', () => {
  let component: EdiTareaComponent;
  let fixture: ComponentFixture<EdiTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdiTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
