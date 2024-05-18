import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AdminDialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(component: any, data: any = {}, config: any = {}): MatDialogRef<any> {
    return this.dialog.open(component, {
      ...config,
      data
    });
  }
}
