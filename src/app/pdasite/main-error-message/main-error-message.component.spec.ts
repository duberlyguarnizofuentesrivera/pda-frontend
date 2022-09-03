import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainErrorMessageComponent} from './main-error-message.component';

describe('MainErrorMessageComponent', () => {
  let component: MainErrorMessageComponent;
  let fixture: ComponentFixture<MainErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainErrorMessageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
