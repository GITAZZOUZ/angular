import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/containers/login/login.component';
import { PageNotFoundComponent } from './page-not-found/containers/page-not-found/page-not-found.component';
import { ListPrestationsComponent } from './prestations/containers/list-prestations/list-prestations.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'prestations', component: ListPrestationsComponent },
    // { path: 'hero/:id',      component: HeroDetailComponent },
     { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
  ]
})
export class AppRoutingModule { }
