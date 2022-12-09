import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor() {}

  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Dashboard', icon: 'pi pi-fw pi-microsoft', routerLink: 'dashboard'},
          {label: 'New Order', icon: 'pi pi-fw pi-credit-card', routerLink: 'new-order'},
          {label: 'Status', icon: 'pi pi-fw pi-box', routerLink: 'status'}
      ];
  }

}
