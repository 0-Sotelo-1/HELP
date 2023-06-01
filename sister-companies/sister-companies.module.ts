// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Imports
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

// General NodeJs Modules

// Framework Imports
import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { PageLayoutModule } from '@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '@vex/components/breadcrumbs/breadcrumbs.module';

// App Imports
import { SisterCompaniesService } from './sister-companies.service';
import { SisterCompaniesComponent } from './sister-companies.component';
import { SisterCompanyCreationAndUpadateDialogComponent } from './sister-company-creation-and-upadate-dialog/sister-company-creation-and-upadate-dialog.component';
import { SisterCompanyCreationAndUpadateDialogModule } from './sister-company-creation-and-upadate-dialog/sister-company-creation-and-upadate-dialog.module';

const routes: VexRoutes = [
  {
    path: '',
    component: SisterCompaniesComponent,
    data: {
      scrollDisabled: false,
      toolbarShadowEnabled: true
    }
  },
]
@NgModule({
  declarations: [SisterCompaniesComponent],
  imports: [
     // Angular Modules
     FormsModule,
     CommonModule,
     ReactiveFormsModule,
     RouterModule.forChild(routes),

     // Angular Material Modules
     MatIconModule,
     MatMenuModule,
     MatSortModule,
     MatTableModule,
     MatDialogModule,
     MatButtonModule,
     MatDividerModule,
     MatTooltipModule,
     MatCheckboxModule,
     MatPaginatorModule,

     // Framework Modules
     PageLayoutModule,
     BreadcrumbsModule,

     // App Modules
     SisterCompanyCreationAndUpadateDialogModule
  ],

})
export class SisterCompaniesModule {}
