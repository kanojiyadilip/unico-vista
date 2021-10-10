import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-section',
  templateUrl: './vista-section.component.html',
  styleUrls: ['./vista-section.component.css']
})
export class VistaSectionComponent implements OnInit {

  constructor() { }
  defaultImage = 'assets/img/placeholder.png';
  ngOnInit(): void {
  }

}
