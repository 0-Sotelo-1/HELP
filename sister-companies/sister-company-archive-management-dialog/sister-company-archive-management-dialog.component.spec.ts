import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisterCompanyArchiveManagementDialogComponent } from './sister-company-archive-management-dialog.component';

describe('SisterCompanyArchiveManagementDialogComponent', () => {
  let component: SisterCompanyArchiveManagementDialogComponent;
  let fixture: ComponentFixture<SisterCompanyArchiveManagementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SisterCompanyArchiveManagementDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SisterCompanyArchiveManagementDialogComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
