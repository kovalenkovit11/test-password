import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class PasswordStrengthComponent {
  title: string = 'Password Strength';
  password: string = '';
  isWeak: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;

  checkPasswordStrength() {
    const password = this.password;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    this.isWeak =
      password.length <= 8 || (!hasLetters && !hasDigits && !hasSymbols);

    this.isMedium =
      !this.isWeak &&
      ((hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols));

    this.isStrong =
      password.length > 8 && hasLetters && hasDigits && hasSymbols;
  }
}
