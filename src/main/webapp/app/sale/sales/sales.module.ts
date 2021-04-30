import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

import { salesRoute } from './sales.route';
import { SalesComponent } from 'app/sale/sales/sales.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([salesRoute])],
  declarations: [SalesComponent],
})
export class SalesModule {}
