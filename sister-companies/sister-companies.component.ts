// Angular Imports
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';

// Angular Material Imports
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

// General NodeJs Modules
import { BehaviorSubject, switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

// Framework Imports
import { stagger80ms } from '@vex/animations/stagger.animation';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { fadeInRight400ms } from '@vex/animations/fade-in-right.animation';
import { scaleFadeIn400ms } from '@vex/animations/scale-fade-in.animation';

// App Imports
import { SisterCompanyData } from '@promter/models';
import { SisterCompaniesService } from './sister-companies.service';
import { SisterCompanyCreationAndUpadateDialogComponent } from './sister-company-creation-and-upadate-dialog/sister-company-creation-and-upadate-dialog.component';

@UntilDestroy()
@Component({
  selector: 'promter-sister-companies',
  templateUrl: './sister-companies.component.html',
  styleUrls: ['./sister-companies.component.scss'],
  animations: [
    stagger80ms,
    fadeInRight400ms,
    scaleFadeIn400ms,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SisterCompaniesComponent implements OnInit {


  columns: TableColumn<SisterCompanyData>[] = [
    { label: 'Identificador', property: 'id', type: 'text', cssClasses: ['text-secondary'], visible: false },
    { label: 'Nombre de la empresa', property: 'name', type: 'text', cssClasses: ['text-secondary'], visible: true },
    { label: 'Acciones', property: 'actions', type: 'button', visible: true }
  ];
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  sistermCompanyDataSource = new MatTableDataSource<SisterCompanyData>();

    // Making the archived filter a data stream
    archivedFilter$ = new BehaviorSubject<boolean>(false);

  constructor(
    private dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private _sistercompany: SisterCompaniesService

  ) { }

  ngOnInit(): void {
    this.archivedFilter$.pipe(
      untilDestroyed(this),
      switchMap(archivedFilter => this._sistercompany.getSisterCompany$(archivedFilter))
    ).subscribe((sisterCompanies: SisterCompanyData[]) => {
      this.sistermCompanyDataSource.data = sisterCompanies;
      this.cd.detectChanges(); 

    });
  }
  
  openSisterCompanyCreationAndUpadateDialogComponent(data: SisterCompanyData) {
    this.dialog.open(SisterCompanyCreationAndUpadateDialogComponent, {
      data,
      disableClose: true,
      panelClass: 'dialog-responsive'
    });
  }

  onFilterChange(value: string) {
    value = value.trim().toLowerCase();
    this.sistermCompanyDataSource.filter = value;
  }

  toggleColumnVisibility(column: any, event: MouseEvent) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  toggleArchivedFilter() {
    this.archivedFilter$.next(!this.archivedFilter$.value);
  }

  trackByProperty(index: number, column: any) {
    return column.property;
  }

  opencreateAndUpdateSisterCompany(data: SisterCompanyData) {
    this.dialog.open(SisterCompanyCreationAndUpadateDialogComponent, {
      data,
      disableClose: true,
      panelClass: 'dialog-responsive'
    });
    
  }

}