import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PasswordStrengthComponent } from './app.PasswordStrengthComponent';

@NgModule({
  declarations: [PasswordStrengthComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [PasswordStrengthComponent],
})
export class AppModule {}
