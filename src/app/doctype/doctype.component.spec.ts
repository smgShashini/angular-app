import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctypeComponent } from './doctype.component';

describe('DoctypeComponent', () => {
  let component: DoctypeComponent;
  let fixture: ComponentFixture<DoctypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
