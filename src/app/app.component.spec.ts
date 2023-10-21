import { TestBed } from '@angular/core/testing';
import { PasswordStrengthComponent } from './app.PasswordStrengthComponent';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [PasswordStrengthComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PasswordStrengthComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'password-strength-app'`, () => {
    const fixture = TestBed.createComponent(PasswordStrengthComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('password-strength-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PasswordStrengthComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'password-strength-app app is running!'
    );
  });
});
