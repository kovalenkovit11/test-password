import { Component, Input } from '@angular/core';
import { PasswordStrengthService } from './../../services/password-strength.service';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css'],
})
export class InputPasswordComponent {
  @Input() status: string = '';
  password: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  checkPasswordStrength(password: string): string {
    if (!password) {
      return 'absent';
    }

    return this.passwordStrengthService.checkPasswordStrength(password);
  }
}