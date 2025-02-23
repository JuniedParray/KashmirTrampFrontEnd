import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TeamMember } from '../../adminModels/admin-teams';
import { AdminTeamMembersService } from '../../adminServices/admin-teams.service';
import { AddEditTeamComponent } from '../add-edit-team/add-edit-team.component';


@Component({
  selector: 'app-teams-component',
  templateUrl: './teams-component.component.html',
  styleUrls: ['./teams-component.component.scss']
})

export class TeamsComponentComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'role', 'fbLink','instaLink', 'Action'];
  dataSource!: MatTableDataSource<TeamMember>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private service: AdminTeamMembersService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.service.getData().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<TeamMember>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open('Failed to load Teammember. Please try again later.', 'Close', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  openDialog(data?: TeamMember): void {
    const dialogRef = this.dialog.open(AddEditTeamComponent, {
      width: '60vw',
      height: '80vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: data || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (data) {
          this.update(result);
        } else {
          this.add(result);
        }
      }
    });
  }

  add(data: TeamMember): void {
    
    this.service.add(data).subscribe({
      next: () => {
        this.snackBar.open('Member added successfully!', 'Close', { duration: 3000 });
        this.loadData();
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Failed to add member. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }


  update(member: TeamMember): void {
    this.service.update(member).subscribe({
      next: () => {
        this.snackBar.open('Member updated successfully!', 'Close', { duration: 3000 });
        this.loadData();
      },
      error: () => {
        this.snackBar.open('Failed to update member. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  delete(data: TeamMember): void {
    if (confirm(`Are you sure you want to delete the team member "${data.name}"?`)) {
      this.service.delete(data.id).subscribe({
        next: () => {
          this.snackBar.open('Member deleted successfully!', 'Close', { duration: 3000 });
          this.loadData();
        },
        error: () => {
          this.snackBar.open('Failed to delete member. Please try again.', 'Close', { duration: 3000 });
        }
      });
    }
  }

  // Apply filter to the table
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

