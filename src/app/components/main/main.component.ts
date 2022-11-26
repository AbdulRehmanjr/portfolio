import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'pot-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data$ = interval(3000)
  unsub$ = new Subject<void>();
  value:number = 1000
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
      this.change()
  }

  /**
   * change the language logo after given interval
   */
  change(){
    this.data$.pipe(takeUntil(this.unsub$)).subscribe({
      next:(data:number)=>{
          console.log(data)    
          this.index= data%this.images.length
          this.srcUrl = this.images[this.index];
          if(data ==10){
            this.unsub$.next()
            this.unsub$.complete()
          }
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        this.change()
      }
    })
    // console.log('number',this.value)
    // console.log('hello')
    // Number(this.value)
    // this.value = this.value +1
    
    // console.log( this.value)
  }
}
