// Angular Imports
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// General NodeJs Packages Imports
import { isEmpty } from "lodash";
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

// Angular Material Imports
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// VEX Framework Imports
import { stagger80ms } from '@vex/animations/stagger.animation';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { SisterCompanyData } from 'libs/models/src/lib/sister-company.class';
import { SisterCompaniesService } from '../sister-companies.service';
import { objectDiff } from 'apps/promter-web-platform/src/app/shared/functions/help.functions';

@UntilDestroy()
@Component({
  selector: 'promter-sister-company-creation-and-upadate-dialog',
  templateUrl: './sister-company-creation-and-upadate-dialog.component.html',
  styleUrls: ['./sister-company-creation-and-upadate-dialog.component.scss'],
  animations:[
    stagger80ms,
    fadeInRight400ms,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SisterCompanyCreationAndUpadateDialogComponent implements OnInit {

  
  //form
  SisterCompanyDataForm = new FormGroup({
    name: new FormControl<SisterCompanyData['name']>(''),
    
    
  });
  
  mode: 'create' | 'update' = 'create';
  
  saveDataSubject$= new Subject<SisterCompanyData>();
  sistercompanyDbData: SisterCompanyData;


  constructor(
    private cd: ChangeDetectorRef,
    private _sistersCompany: SisterCompaniesService,
    @Inject(MAT_DIALOG_DATA) public sistercompany: SisterCompanyData,
    private dialogRef: MatDialogRef<SisterCompanyCreationAndUpadateDialogComponent>,
  ) { }

  ngOnInit(): void {
    if (!!this.sistercompany) {
      this.mode = 'update';
      const { name } = this.sistercompany;
      this.SisterCompanyDataForm.patchValue({ name });
      this.sistercompanyDbData = { name }; 
    }
    
  }

      ngAfterViewInit(){
        this. saveDataSubject$.pipe(
          untilDestroyed(this),
          debounceTime(248),
          distinctUntilChanged(),
          ).subscribe(SisterCompanyData =>{
            if (this.mode === 'create')
            this._sistersCompany.createSisterCompany(SisterCompanyData);
            else {
              const diferences = objectDiff(SisterCompanyData, this.sistercompanyDbData);
              if (!isEmpty(diferences)) this._sistersCompany.updateSisterCompany(this.sistercompany.id, diferences);
            }
            this._sistersCompany.snackBar.open('Empresa guardada correctamente', 'Ok', {duration: 2486});
            this.dialogRef.close();
          });
        }
  // save data
  saveData(){
   if (this.SisterCompanyDataForm.invalid) return this.cd.markForCheck();
   const { name} = this.SisterCompanyDataForm.value;
   return this.saveDataSubject$.next({ name: name.trim()});

  }
}
