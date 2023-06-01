
  
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { SisterCompanyData } from '@promter/models';
import { SisterCompaniesService } from '../sister-companies.service';

@Component({
  selector: 'promter-sister-company-archive-management-dialog',
  templateUrl: './sister-company-archive-management-dialog.component.html',
  styleUrls: ['./sister-company-archive-management-dialog.component.scss'],
})
export class SisterCompanyArchiveManagementDialogComponent implements OnInit {

  constructor(
    private _sisterCompany: SisterCompaniesService,
    @Inject(MAT_DIALOG_DATA) public sistercompany: SisterCompanyData,
    private dialogRef: MatDialogRef<SisterCompanyArchiveManagementDialogComponent>
  ) { }
  mode: 'archiving' | 'unarchiving' = 'archiving';

  ngOnInit(): void {
    this.mode = this.sistercompany.isArchived ? 'unarchiving' : 'archiving';
  
  }
  
  archiveSisterCompany() {
    this._sisterCompany.archiveSisterCompany(this.sistercompany.id, true);
    this._sisterCompany.snackBar.open(`Empresa ${this.mode === 'archiving' ? 'archivado' : 'desarchivado'} correctamente`, 'Ok', { duration: 3486 });
    this.dialogRef.close();
  }
  

}

