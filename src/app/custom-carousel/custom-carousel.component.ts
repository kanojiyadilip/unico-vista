import { Component, ViewChild, Input, OnInit, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import * as $ from 'jquery';
import 'slick-carousel';

declare var hotels_property: any;
@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.css']
})
export class CustomCarouselComponent implements OnInit, AfterViewInit {

  defaultImage = 'assets/img/placeholder.png';
  public show: boolean = true;

  pipe = new DatePipe('en-US');
  // date: Date;
  onwardDate: any;
  returndDate: any;
  baseUrl: any = '';
  withoutImg: boolean = false;


  constructor() {}

  ngOnInit() {
  }



  ngAfterViewInit(){
    
    (<any>$('.slider-for')).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    (<any>$('.slider-nav')).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      focusOnSelect: true,
      autoplay: true,
    });
   
    (<any>$('a[data-slide]')).click(function(this: HTMLButtonElement, e:any) {
      e.preventDefault();
      var slideno = $(this).data('slide');
      (<any>$('.slider-nav')).slick('slickGoTo', slideno - 1);
    });
  }
}
