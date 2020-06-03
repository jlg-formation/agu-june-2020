import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StockRoutingModule } from './stock-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [CommonModule, StockRoutingModule, FontAwesomeModule],
})
export class StockModule {}
