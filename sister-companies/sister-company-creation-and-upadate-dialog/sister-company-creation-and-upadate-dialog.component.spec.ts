import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisterCompanyCreationAndUpadateDialogComponent } from './sister-company-creation-and-upadate-dialog.component';

describe('SisterCompanyCreationAndUpadateDialogComponent', () => {
  let component: SisterCompanyCreationAndUpadateDialogComponent;
  let fixture: ComponentFixture<SisterCompanyCreationAndUpadateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SisterCompanyCreationAndUpadateDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SisterCompanyCreationAndUpadateDialogComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
