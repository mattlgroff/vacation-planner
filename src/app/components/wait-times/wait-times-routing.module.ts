import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaitTimesTabsComponent } from './wait-times-tabs/wait-times-tabs.component';

const routes: Routes = [{ path: '', component: WaitTimesTabsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitTimesRoutingModule {}
