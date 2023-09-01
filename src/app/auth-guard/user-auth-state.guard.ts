import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthStateGuard implements CanActivate {
  isUser?: boolean;
  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.userService.getuserStatus().subscribe(res=>
      this.isUser = res
    );
    console.log("from auth",this.isUser);


    if (!this.isUser) {
       return true;
    }

    return this.router.navigate([environment.userBaseUrl]);

  }

}




