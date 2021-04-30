import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'sales',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule),
        data: {
          pageTitle: 'sale.home.title',
        },
      },
    ]),
  ],
})
export class SaleRoutingModule {}
