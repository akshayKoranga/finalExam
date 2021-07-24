import { Component, HostListener, Inject, ElementRef, OnInit, ViewChild, Injectable } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../services/api.services';




export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public api: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    console.log("hhhauai")
    this.getAllHospital()
  }

  // public hospitals: Array ;
  public hospitals: any = [];


  getAllHospital() {

    // this.api.getAllHospital().subscribe(
    //   success => {

    this.api.getAllHospital().subscribe(
      (response: any) => {
        this.hospitals = response['Hospitals'];
        // this.hospitals = data['Hospitals'].siteList;
      }, error => {
      })

  }

  // openCylinderBooking(): void {
  //   const dialogRef = this.dialog.open(cylinderBookingDialog, {
  //     width: '750px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }


  // async openFilters() {
  //   //-------
  //   // let sendAreaTags = {
  //   //   allAreaTags: this.allAreaTagsList,
  //   //   filterAreaTags: this.filteredAreaTags
  //   // }
  //   // console.log(' this.filters', this.filters)
  //   const dialogRef = this.dialog.open(editProfile, {
  //     panelClass: 'schedule-filter-dialog',
  //     width: '600px',
  //     maxHeight: '80vh',
  //     data: {
  //       date: "this.todayDate",
  //       filters: "this.filters"

  //     }
  //   });
  //   await dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       console.log("data closed with result")
  //     }
  //   });
  // }

  // openFilters() {
  //   const dialogRef = this.dialog1.open(bufferpopup, {
  //     width: '450px',
  //     data: { title: "15 mins is Buffer time. This schedule is less than 15 mins and will be counted as 0 hrs in time sheet", }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //   });
  // }
}


@Component({
  selector: 'booking-dailog',
  templateUrl: 'bookBed.component.html',
  styleUrls: ['./table.component.css']
})
export class bedBookingDialog {

  constructor(
    public dialogRef: MatDialogRef<bedBookingDialog>,
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