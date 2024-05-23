import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { LoginFormComponent } from '../../../features/auth/components/login-form/login-form.component';

@Component({
  standalone: true,
  imports: [
    // CommonModule,
    RouterLink,
    // BasicLayoutComponent
    SharedModule,
    LoginFormComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  onLoginSuccess() {
    this.router.navigate(['/']);
  }
}
