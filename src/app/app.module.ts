import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { PasswordStrengthService } from './services/password-strength.service';
import { PasswordStrengthBarComponent } from './components/password-strength-bar-component/password-strength-bar-component.component';

@NgModule({
  declarations: [AppComponent, PasswordStrengthBarComponent, InputPasswordComponent],
  imports: [BrowserModule, FormsModule],
  providers: [PasswordStrengthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
