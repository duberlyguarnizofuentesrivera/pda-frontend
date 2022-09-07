import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminManageGraphsComponent} from './admin-manage-graphs.component';

describe('AdminManageGraphsComponent', () => {
  let component: AdminManageGraphsComponent;
  let fixture: ComponentFixture<AdminManageGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminManageGraphsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
