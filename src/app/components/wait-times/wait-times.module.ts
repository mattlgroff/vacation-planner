import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitTimesRoutingModule } from './wait-times-routing.module';
import { WaitTimesService } from './wait-times-tabs/wait-times.service';
import { MatTabsModule, MatCardModule } from '@angular/material';
import { WaitTimesTabsComponent } from './wait-times-tabs/wait-times-tabs.component';

@NgModule({
  declarations: [WaitTimesTabsComponent],
  imports: [CommonModule, WaitTimesRoutingModule, MatCardModule, MatTabsModule],
  providers: [WaitTimesService],
})
export class WaitTimesModule {}
