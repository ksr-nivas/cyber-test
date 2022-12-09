import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { PizzaManagerService } from '../services/pizza-manager.service';

@Injectable({providedIn: 'root'})
export class RoleGuard implements CanActivate {
    constructor(private pizzaManagerService: PizzaManagerService, private router: Router) { }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        let isAdmin = this.pizzaManagerService.isAdmin();
        if (isAdmin){
          return true;
        } else {
          this.router.navigate(['/dashboard']);
        }
      }
}