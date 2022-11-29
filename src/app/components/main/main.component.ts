import { Component, OnInit } from '@angular/core';
import { interval} from 'rxjs';

@Component({
  selector: 'pot-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data$ = interval(1000)
  value:number = 0
  srcUrl:string = "../../../assets/java.png"
  images:string[] =[
  "../../../assets/java.png",
  "../../../assets/angular.png",
  "../../../assets/jpa.png",
  "../../../assets/spring.png",
  "../../../assets/jpa.png",
  "../../../assets/js.png",
  "../../../assets/css.png",
  "../../../assets/mysql.png",
  "../../../assets/html.png",
  "../../../assets/C.png",
]
index!:number

  constructor() { }

  ngOnInit(): void {
      //this.change()
      this.change2()
  }


  /**
   * change the language logo after given interval using setTimeout
   */
  change2(){
    setInterval(()=>{
      this.index= this.value%this.images.length
    this.srcUrl = this.images[this.index];
    this.value++
    
    if(this.value == 9){
      this.value = 0
    }
    },3000)
  }
  /**
   * redirect to google Doc
   */
  getCV(){
    console.log('clicked')
    window.open('https://drive.google.com/file/d/1cCVc4p-f8lDDkguxWksTsgG1MDntM9SU/view?usp=share_link',"_blank")
  }
}
