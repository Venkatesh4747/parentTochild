import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  delay=500;
  message: any;
  arr=['test', 'test12', 'test45', 'test89'];

  constructor() { }

  ngOnInit(): void {


  }

 gt() {

   for(let i=0; i< this.arr.length; i++)
   {
     this.greet(i)
    }
  }


  greet(i: any) {
    this.message = this.arr[i];
}

test() {
  setInterval(() => {
    this.gt();
  }, 1000);
}
}

