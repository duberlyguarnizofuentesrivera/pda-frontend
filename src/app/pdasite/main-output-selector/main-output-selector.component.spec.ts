import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainOutputSelectorComponent} from './main-output-selector.component';

describe('MainOutputSelectorComponent', () => {
  let component: MainOutputSelectorComponent;
  let fixture: ComponentFixture<MainOutputSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainOutputSelectorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOutputSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
