import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/route-guards/role.guard';
import { StatusComponent } from './components/status.component';

const routes: Routes = [
    { path: '', component: StatusComponent, canActivate: [RoleGuard] }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class StatusRoutingModule { }
