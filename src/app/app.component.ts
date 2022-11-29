import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logo:string ='../assets/slogo.png'
  title = 'portfolio'

  ngOnInit(): void {
    AOS.init()
  }
}
