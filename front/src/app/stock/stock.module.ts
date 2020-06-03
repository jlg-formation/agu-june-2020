import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StockRoutingModule } from './stock-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [CommonModule, StockRoutingModule, FontAwesomeModule, WidgetModule],
})
export class StockModule {}
