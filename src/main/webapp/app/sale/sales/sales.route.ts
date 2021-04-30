import { Route } from '@angular/router';

import { SalesComponent } from 'app/sale/sales/sales.component';

export const salesRoute: Route = {
  path: '',
  component: SalesComponent,
  data: {
    pageTitle: 'sale.title',
  },
};
