import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  N: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(){

    for (let i=0; i < this.N.length; i++) {

      let n = this.N[i];

    }
  }
}
