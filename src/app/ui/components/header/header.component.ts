import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../../prestations/services/login.service';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public title = 'My CRM';
    public faBars = faBars;
    public faUser = faUser;
    public open = true;
    public log$: BehaviorSubject<any>;
    public user: string;

    constructor(private loginService: LoginService) {}

    ngOnInit() {

        this.log$ = this.loginService.log$;
        this.user = this.loginService.user;
    }

    public login() {
        this.loginService.login();
    }
    public logout() {
        this.loginService.logout();
    }
    // public log() {
    //     if (this.status === 'login') {
    //         this.loginService.login$.next('Abdel');
    //     } else {
    //         this.loginService.login$.next('login');
    //     }

    //     //   if (this.login$ === 'login') {
    //     // this.loginService.login$.next('Abdel');
    //     // this.login$ =  this.loginService.login$;

    //     //   } else {{
    //     //     this.loginService.login$.next('login');
    //     //     this.login$ =  this.loginService.login$;
    //     //   }
    // }
    //   public toggle() {
    //       this.open = !this.open;
    //   }
}
