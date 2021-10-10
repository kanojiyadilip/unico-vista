import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl:any = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  userData(){

    return this.http.get(`${this.apiUrl}`);


    // this.httpClient.get(this.apiUrl).subscribe((res)=>{
    //   console.log("=res=>",res)
    // })
  }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }
}
