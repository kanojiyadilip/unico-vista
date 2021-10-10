import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  apiUrl:any="https://jsonplaceholder.typicode.com/users";
  constructor(private api: ServiceService, private http: HttpClient) { this.apicall()}

  ngOnInit(): void {
    // this.apicall();
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
    console.log("==><>",this.api.userData);
  })
  }

  apicall(){
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
    console.log("==><>",this.api.userData);
  })
    // this.http.get(this.apiUrl).subscribe((res)=>{
    //   console.log("=res=>",res)
    // })
  }

}
