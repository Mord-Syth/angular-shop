import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onLoginClicked(user: string): void {
    this.authService
      .login(user)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        () => {
          if (this.authService.isLoggedIn) {
            const redirect = this.authService.redirectUrl
              ? this.authService.redirectUrl
              : '/products-list';

            const navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true
            };

            // Redirect the user
            this.router.navigate([redirect], navigationExtras);
          }
        },
        err => console.log(err),
        () => console.log('[takeUntil] complete')
      );
  }

  onLogoutClicked() {
    this.authService.logout();
  }

}
