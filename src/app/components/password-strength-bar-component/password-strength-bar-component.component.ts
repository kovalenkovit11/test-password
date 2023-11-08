import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength-bar-component.component.html',
  styleUrls: ['./password-strength-bar-component.component.css'],
})
export class PasswordStrengthBarComponent {
  @Input() status: string = '';

  constructor() {}

  getDynamicClass() {
    return {
      absent: 'default',
      weak: 'red',
      medium: 'yellow',
      strong: 'green',
      few: 'few',
    }[this.status];
  }
}




