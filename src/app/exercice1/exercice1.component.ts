import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {


  public count: number = 0;
  public myStyle: {};
  constructor() { 

    this.myStyle = {
      'font-style':  'italic',
      'font-weight': 'bold',
      'font-size':   '20px'
    };

  }

  ngOnInit() {
  }


  public updateCount(): void {
    this.count +=1;
  }

}
