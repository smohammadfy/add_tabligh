import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DialogComponent} from '../dialog';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-add-token',
  templateUrl: './add-token.component.html',
  styleUrls: ['./add-token.component.sass']
})
export class AddTokenComponent implements OnInit {

  adduser = 'address';
  req = '';
  constructor(private http: HttpClient , public dialog: MatDialog) {
  }

  ngOnInit() {
  }
  submit() {
  }

  //
  // openDialog(): void {
  //   this.openDialog(DialogComponent);
  // }
  openDialog(): void {
      this.dialog.open(DialogComponent, {
        width: '60vw',
      data: 'myresponse'
    });

    // dialogRef.afterClosed().subscribe(() => {
    //   console.log('The dialog was closed');
    // });
  }
}
