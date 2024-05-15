import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomersModule } from './customers/customers.module';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <app-customers></app-customers>
  `,
  imports: [CustomersModule]
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

}