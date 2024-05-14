import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from "./customers/customers.component";
import { CustomerModule } from "./customers/customers.module";

@Component({
  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `,
  standalone: true,
  imports: [CustomerModule]
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

}