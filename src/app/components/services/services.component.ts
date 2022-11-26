import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pot-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  cards:card[] = [
    {
      image:'../../../assets/java.png',
      description:'Java Core,OOP, Security'
    },
    {
      image:'../../../assets/C.png',
      description:'C++ Core'
    },
    {
      image:'../../../assets/spring.png',
      description:'Spring boot'
    },
    {
      image:'../../../assets/angular.png',
      description:'Angular'
    },
    {
      image:'../../../assets/jpa.png',
      description:'JPA'
    }
    ,{
      image:'../../../assets/html.png',
      description:'HTML 5'
    },
    {
      image:'../../../assets/css.png',
      description:'CSS'
    },
    {
      image:'../../../assets/js.png',
      description:'JavaScript'
    },
    {
      image:'../../../assets/mysql.png',
      description:'MYSQL'
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
interface card{
  image:string
  description:string
}
