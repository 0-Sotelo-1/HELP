// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Imports
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

import { SisterCompanyCreationAndUpadateDialogComponent } from '../sister-company-creation-and-upadate-dialog/sister-company-creation-and-upadate-dialog.component';

@NgModule({
  declarations: [SisterCompanyCreationAndUpadateDialogComponent],
  imports: [
       // Angular Modules
       CommonModule,
       ReactiveFormsModule,

       // Angular Material Modules
       MatIconModule,
       MatInputModule,
       MatDialogModule,
       MatButtonModule,
       MatSelectModule,
       MatDividerModule,
  ],
})
export class SisterCompanyCreationAndUpadateDialogModule {}
