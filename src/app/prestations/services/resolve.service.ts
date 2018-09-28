import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {  of, EMPTY } from 'rxjs';
import {  take, map } from 'rxjs/operators';
import { PrestationsService } from './prestations.service';
import { Prestation } from '../../shared/models/prestation';



@Injectable({
    providedIn: 'root'
})
export class ResolveService implements Resolve<Prestation> {
    constructor(private prestationService: PrestationsService, private router: Router) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): any {
        const id = route.paramMap.get('id');


        console.log('--------------------------------');



        return this.prestationService.getPrestation(id).pipe(
            take(1),
            map(prestation => {
                console.log('uuuuuuuuuuuuuuu');
                console.log(prestation);
                if (prestation) {
                    return of(prestation);
                } else {
                    console.log('rrrrrrrrrrrrrrrrrrrrrr');
                     this.router.navigate(['/prestations']);
                    return EMPTY;
                }
            })
        );
    }
}
