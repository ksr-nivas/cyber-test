import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'new-order', pathMatch: 'full' },
  { path: 'new-order', loadChildren: () => import('./modules/new-order/new-order.module').then( (m) => m.NewOrderModule ) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then( (m) => m.DashboardModule ) },
  { path: 'status', loadChildren: () => import('./modules/status/status.module').then( (m) => m.StatusModule ) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
