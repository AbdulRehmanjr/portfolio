import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pot-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  cards: card[] = [
    {
      image: '../../../assets/services/ux.png',
      heading: 'Front End',
      description: 'SPA using angular'
    },
    {
      image: '../../../assets/services/coding.png',
      heading: 'Back End',
      description: 'Backend design using spring boot'
    },
    {
      image: '../../../assets/services/database-storage.png',
      heading: 'Data Base',
      description: 'Database administration'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
interface card {
  image: string
  heading: string
  description: string
}
