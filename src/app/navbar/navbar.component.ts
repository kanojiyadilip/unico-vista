import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public dropDownList: any =[
    {
      lable:"UAE"
    },
    {
      lable:"Maharashtra",
      multi:[
        {
          lable:"Lonavala Villas"
        },
        {
          lable:"Alibag Villas"
        }
      ]
    },
    {
      lable:"Delhi",
      multi:[]
    },
    {
      lable:"Goa",
      multi:[]
    },
    {
      lable:"HimachalPradesh",
      multi:[]
    },
    {
      lable:"Punjab",
      multi:[]
    }
  
  ]

  ngOnInit(): void {
  }

}
