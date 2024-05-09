import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicLayoutComponent } from '../../../shared/components/basic-layout/basic-layout.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BasicLayoutComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent { }
