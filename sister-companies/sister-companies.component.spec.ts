import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisterCompaniesComponent } from './sister-companies.component';

describe('SisterCompaniesComponent', () => {
  let component: SisterCompaniesComponent;
  let fixture: ComponentFixture<SisterCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SisterCompaniesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SisterCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
