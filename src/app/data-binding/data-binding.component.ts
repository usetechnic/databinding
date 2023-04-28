import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  nome: String;

  email: String;

  constructor(){

    this.nome = "Angular";

    this.email = "angular@angular.com";

  }
}
