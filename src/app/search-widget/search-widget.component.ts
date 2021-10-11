import { Component, OnInit, ElementRef } from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css'],
  providers: [DatePipe],
  host: {
    "(document:click)": "onClick($event);"
  }
})
export class SearchWidgetComponent implements OnInit {

  hoveredDate: NgbDate | null = null;
  selectedCity:any="";

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  minDate:any;

  placeHolderFdate: any;
  placeHolderTdate: any;
  isGuestMenuOpen:any;

  cityList: any = [
    {name: "Mumbai, Maharashtra", type:"city"},
    {name: "Pune, Maharashtra", type:"city"},
    {name: "New Delhi, Delhi", type:"city"},
    {name: "Lonavala, Maharashtra", type:"city"},
    {name: "Alibaug, Maharashtra", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"},
    {name: "Mumbai", type:"city"}
  ]

  name = 'Angular';
  isMenuOpen = true;
  guest: any = {
    adult:1,
    child:0
  }

  constructor(calendar: NgbCalendar, private _eref: ElementRef, private datePipe: DatePipe) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
    console.log("=this.minDate=>",this.minDate);
  }

  ngOnInit(): void {
    this.isMenuOpen = false;
    this.isGuestMenuOpen = false;
  }
  daterange: any;
  onDateSelection(date: NgbDate) {
    console.log("=data=>",date);
    this.op.close()
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.placeHolderFdate = `${this.fromDate?.year}-${this.fromDate?.month}-${this.fromDate?.day}`
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.placeHolderTdate = `${this.toDate?.year}-${this.toDate?.month}-${this.toDate?.day}`
      console.log(this.placeHolderFdate,"<++++++++++++>", this.placeHolderTdate)
      this.daterange =`${this.datePipe.transform(this.placeHolderFdate,'MMM d, y')} - ${this.datePipe.transform(this.placeHolderTdate,'MMM d, y')}`;
      console.log("=daterange=1>",this.daterange);
    } else {
      console.log("=data=1>",this.op);
      setTimeout(()=>{
      this.op.open()
      },100)
      this.toDate = null;
      this.fromDate = date;
      this.placeHolderFdate = `${this.fromDate?.year}-${this.fromDate?.month}-${this.fromDate?.day}`
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }


  // ========================= for hide city ===


  toggleMenu($event:any) {   
    // console.log("=$event=>",$event) 
    $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick(event:any) {
    // console.log(event.target,"=1=>",!this._eref.nativeElement.contains(event.target))
    if (this._eref.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  closeGuest(val:any){
    if(val == 'a'){
      // this.isGuestMenuOpen = false;
    }
    if(val == 'c'){
      this.guest = {
        adult:1,
        child:0
      }
    }
    this.isGuestMenuOpen = false;
  }

  toggleGuestMenu($event:any) {    
    $event.stopPropagation();
    this.isGuestMenuOpen = !this.isGuestMenuOpen;
  }

  public op:any;
  dod(evl:any){
    this.op = evl;
    evl.open();
  }

  guestMath(event:any){
    console.log("event===>",event)
    if(event.user == 'a'){
      if(event.op == 'add'){
        // this.guest = {...this.guest, adult: ++this.guest.adult};
        this.guest.adult = this.guest.adult + 1;
        console.log("this.guest===>",this.guest)
      }
      else{        
        this.guest.adult = (this.guest.adult>1)?this.guest.adult - 1:1;
      }
    }
    else{
      if(event.op == 'add'){
        // this.guest = {...this.guest, adult: ++this.guest.adult};
        this.guest.child = this.guest.child + 1;
      }
      else{        
        this.guest.child = (this.guest.child>0)?this.guest.child - 1:0;
      }
    }

  }

  pickCity(val:any){
    console.log("val=>",val)
    this.selectedCity = val.name
  }

  autoCloseForDropdownCars(event:any) {
    var target = event.target;
    // console.log(!target.closest(".DropdownCars"),"<=new=>", target)
    if (!target.closest(".DropdownCars")) { 
        // do whatever you want here
        this.closeGuest('a')
    }
}

}


