import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { EllipsisPipe } from './ellipsis.pipe';
import { ChronoComponent } from './chrono/chrono.component';
import { DurationPipe } from './duration.pipe';



@NgModule({
  declarations: [AutofocusDirective, EllipsisPipe, ChronoComponent, DurationPipe],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, EllipsisPipe, ChronoComponent, DurationPipe]
})
export class WidgetModule { }
