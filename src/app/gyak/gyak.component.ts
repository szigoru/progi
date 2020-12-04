import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gyak',
  templateUrl: './gyak.component.html',
  styleUrls: ['./gyak.component.css']
})
export class GyakComponent implements OnInit {

  constructor() { }
  szin: string = "kék"
  name:string = ""
  myCol = 'lighblue'
  color: 'yellow'
  flag = true
  colorA = 'red'
  colorB = 'blue'
  colors = ['yellow', 'green', 'lightblue', 'black', 'white', 'lightgreen', 'pink', 'grey']
  magyarcolors = ['sárga', 'zöld', 'világoskék', 'fekete', 'fehér', 'világoszöld', 'rózsaszín', 'szürke']
  i = 4;
  zöld = this.colors[1]
  ketyere = 'background-color:'
  ketyere2 = 'background-color:'
  black= 'background-color:black'
  

  ngOnInit(): void {
  }

  divszine2() {
    this.flag = true
    this.i = this.i - 1
    if (this.i < 0) { this.i = 7 }
  }

  addkianevet(logi){
    this.name=logi;
  }

  miaszin() {
    this.flag = true;
    this.i = 1;
    console.log(this.i)
  }

  szincsere(szin){
    this.ketyere= this.ketyere2;
    this.ketyere = this.ketyere+szin;
          if (szin=='black'){
            this.ketyere='background-color:pink'
          }
    console.log(this.ketyere)
    
  }
}
