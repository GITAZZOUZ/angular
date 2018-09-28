import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    public log$: BehaviorSubject<string> = new BehaviorSubject('logout');
    public user = 'Abdelaziz';
  constructor() { }
  public login(): void {
      this.log$.next('login');
  }
  public logout(): void {
    this.log$.next('logout');
}
}
