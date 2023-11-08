import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css'],
})
export class InputPasswordComponent {
  @Input() status: string = '';

  password: string = '';
  constructor() {}

  checkPasswordStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    if (!password) {
      return 'absent';
    } else if (password.length < 8) {
      return 'few';
    } else if (hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if ((hasLetters && hasDigits) || (hasDigits && hasSymbols) || (hasLetters && hasSymbols)) {
      return 'medium';
    } else {
      return 'weak';
    }
  }
}
