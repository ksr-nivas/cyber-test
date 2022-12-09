import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './components/status.component';

import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';

import { RoleGuard } from 'src/app/route-guards/role.guard';
import { TimePipe } from 'src/app/pipes/time.pipe';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [StatusComponent, TimePipe],
  imports: [
    CommonModule,
    ButtonModule,
    BadgeModule,
    TableModule,
    ToastModule,
    StatusRoutingModule
  ],
  providers: [RoleGuard]
})
export class StatusModule { }
