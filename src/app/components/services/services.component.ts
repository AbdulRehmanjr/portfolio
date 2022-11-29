import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pot-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  cards: card[] = [
    {
      image: '../../../assets/services/s1.png',
      heading: 'heading',
      description: 'description'
    },
    {
      image: '../../../assets/services/s1.png',
      heading: 'heading',
      description: 'description'
    },
    {
      image: '../../../assets/services/s1.png',
      heading: 'heading',
      description: 'description'
    },
    {
      image: '../../../assets/services/s1.png',
      heading: 'heading',
      description: 'description'
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
