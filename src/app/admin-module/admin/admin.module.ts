import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from '../admin-components/dashboard/dashboard.component';
import { AddPackageComponent } from '../../add-package/add-package.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    DashboardComponent,
    AddPackageComponent,
 
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
 
  ]
})
export class AdminModule { }
