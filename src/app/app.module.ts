import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerModule } from "./customers/customers.module";
import { CustomerComponent } from "./customers/customers.component";

@NgModule({
    imports: [BrowserModule, CustomerModule],
    declarations: [AppComponent, CustomerComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }