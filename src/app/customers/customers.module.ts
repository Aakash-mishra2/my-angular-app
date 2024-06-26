import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component'
import { FilterTextboxComponent } from './customers-list/filter-textBox.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
    exports: [CustomersComponent]
})
export class CustomersModule { }