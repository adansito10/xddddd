import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsAdminComponent } from './analytics-admin.component';

describe('AnalyticsAdminComponent', () => {
  let component: AnalyticsAdminComponent;
  let fixture: ComponentFixture<AnalyticsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyticsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
