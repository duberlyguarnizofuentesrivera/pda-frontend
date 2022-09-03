import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainGraphFillerComponent} from './main-graph-filler.component';

describe('MainGraphFillerComponent', () => {
  let component: MainGraphFillerComponent;
  let fixture: ComponentFixture<MainGraphFillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainGraphFillerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGraphFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
