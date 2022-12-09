import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PizzaManagerService {
  private url = 'assets/pizza.json';

  constructor(private http: HttpClient) {}

  isAdmin(): boolean {
    return true;
  }

  // make api calls
  public getPizzaConfig(): Observable<any> {
    return this.http.get(this.url);
  }
}
