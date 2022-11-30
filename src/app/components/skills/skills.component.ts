import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'pot-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  status:status[] = [
    {
      name:'HTML/CSS',
      value:90
    },
    {
      name:'TypeScript',
      value:80
    },
    {
    name:'Java',
    value:85  
    },
    {
      name:'Spring boot',
      value:80
    },
    {
      name:'Angular',
      value:90
    },
    {
      name:'JavaScript',
      value:80
    },
    {
      name:'Git',
      value:75
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
interface status{
    name:string
    value:number
}