// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { SisterCompanyArchiveManagementDialogComponent } from '../sister-company-archive-management-dialog/sister-company-archive-management-dialog.component';

@NgModule({
  declarations: [SisterCompanyArchiveManagementDialogComponent],
  imports: [
    // Angular Modules
    CommonModule,

    // Angular Material Modules
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule
  ]
})
export class SisterCompanyArchiveManagementDialogModule {}

