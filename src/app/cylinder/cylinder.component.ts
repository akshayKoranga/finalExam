import { Component, HostListener, Inject, ElementRef, OnInit, ViewChild, Injectable } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';



export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-cylinder',
  templateUrl: './cylinder.component.html',
  styleUrls: ['./cylinder.component.css']
})
export class CylinderComponent implements OnInit {

  constructor(
    private router: Router,
    // protected eventService: EventService,
    public dialog: MatDialog,
    // private _scheduleservice: ScheduleService,
    // public api: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  name = "string"
  animal = "animal"

  openCylinderBooking(): void {
    const dialogRef = this.dialog.open(cylinderBookingDialog, {
      width: '750px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'cylinder-booking-dailog',
  templateUrl: 'cylinderBooking.html',
  styleUrls: ['./cylinder.component.css']
})
export class cylinderBookingDialog {

  constructor(
    public dialogRef: MatDialogRef<cylinderBookingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  createEvent(form: NgForm) {


    const name = form.value.name;
    const website = form.value.website;
    const bed = form.value.bed;
    const body = {
      'name' : name,
      'website': website,
      'bed': bed
    };
    console.log("form -->", body)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
