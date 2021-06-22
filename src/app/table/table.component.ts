import { Component, HostListener, Inject, ElementRef, OnInit, ViewChild, Injectable } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';



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
    // protected eventService: EventService,
    // public dialog: MatDialog,
    // private _scheduleservice: ScheduleService,
    // public api: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }


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