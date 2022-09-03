import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainGraphSelectorComponent} from './main-graph-selector.component';

describe('MainGraphSelectorComponent', () => {
  let component: MainGraphSelectorComponent;
  let fixture: ComponentFixture<MainGraphSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainGraphSelectorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGraphSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
