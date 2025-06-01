import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-demo',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login-demo.component.html',
  styleUrl: './login-demo.component.css',
})
export class LoginDemoComponent {
  form!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
