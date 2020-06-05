import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { EllipsisPipe } from './ellipsis.pipe';
import { ChronoComponent } from './chrono/chrono.component';



@NgModule({
  declarations: [AutofocusDirective, EllipsisPipe, ChronoComponent],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, EllipsisPipe, ChronoComponent]
})
export class WidgetModule { }
