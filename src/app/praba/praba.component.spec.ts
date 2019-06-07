import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrabaComponent } from './praba.component';

describe('PrabaComponent', () => {
  let component: PrabaComponent;
  let fixture: ComponentFixture<PrabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
