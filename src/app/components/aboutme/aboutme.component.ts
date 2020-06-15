import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
public title:string;
public subtitle:string;
public email:string
  constructor() { 
   this.title="Jonathan Lopez";
   this.subtitle= "Desarrollador Web FullStack";
   this.email= "jonathan@gmail.com"
  }

  ngOnInit(): void {
  }

}
