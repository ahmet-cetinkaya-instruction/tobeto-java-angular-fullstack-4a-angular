import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyAccountPageComponent } from './my-account-page/my-account-page.component';
import { AdminPanelPageComponent } from './admin-panel-page/admin-panel-page.component';

export const authRoutes: Routes = [
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    path: 'my-account',
    component: MyAccountPageComponent,
  },
  {
    path: 'admin-panel',
    component: AdminPanelPageComponent,
  },
];
