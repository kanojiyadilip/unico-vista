import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ServiceService,private http: HttpClient) { }

  data:any;
  defaultImage = 'assets/img/placeholder.png';
  bannerimg1:any="https://img.vistarooms.com/angular_assets/common/home_page/home_carousel/Hero+Banner+1.jpg";
  bannerimg2:any="https://img.vistarooms.com/angular_assets/common/home_page/Dubai/desktop+dubai+banner+homepage.jpg";
  ngOnInit(): void {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      console.log("==>2<>",data);
      this.data = data;
    })
  }

}
