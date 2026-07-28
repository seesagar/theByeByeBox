import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ToastModule, RouterLink],
  providers: [MessageService],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupComponent {
  email = '';
  password = '';
  rememberMe = true;
  showPassword = signal(false);

  constructor(private readonly messageService: MessageService) {}

  togglePassword() { this.showPassword.update((visible) => !visible); }

  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) {
      loginForm.control.markAllAsTouched();
      this.messageService.add({ severity: 'error', summary: 'Please check your details', detail: this.getValidationMessage(loginForm), life: 4500 });
      return;
    }

    this.messageService.add({ severity: 'success', summary: 'Login details accepted', detail: 'Your login request is ready to be sent securely.', life: 3500 });
    console.log('Login submitted for:', this.email);
  }

  private getValidationMessage(loginForm: NgForm): string {
    const email = loginForm.controls['email'];
    const password = loginForm.controls['password'];
    if (email?.errors?.['required']) return 'Enter your email address.';
    if (email?.errors?.['email']) return 'Enter a valid email address.';
    if (password?.errors?.['required']) return 'Enter your password.';
    if (password?.errors?.['minlength']) return 'Your password must contain at least 8 characters.';
    return 'Correct the highlighted fields and try again.';
  }
}
