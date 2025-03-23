import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { SignalsBasicsComponent } from "../signals-basics/signals-basics.component";

@Component({
  selector: 'app-contact-us-reactive',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, SignalsBasicsComponent],
  templateUrl: './contact-us-reactive.component.html',
  styleUrl: './contact-us-reactive.component.css',
})
export class ContactUsReactiveComponent {
  contactForm!: FormGroup;
  userId = 0;
  formValidity = signal(false); // Signal for form validity
  errorMessage = signal(''); // Signal for general error message
  fieldErrors = signal<Record<string, string>>({}); // Signal for field-specific errors
  objectValues = Object.values; // Utility to iterate over object values in the template

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });

    // Subscribe to form-level status changes
    this.contactForm.statusChanges.subscribe((status) => {
      this.formValidity.set(this.contactForm.valid);
    });

    // Subscribe to individual control changes
    Object.keys(this.contactForm.controls).forEach((field) => {
      const control = this.contactForm.get(field);
      control?.statusChanges.subscribe(() => this.updateFieldErrors());
    });
  }

  // Update field-specific errors dynamically
  updateFieldErrors() {
    const errors: Record<string, string> = {};
    Object.keys(this.contactForm.controls).forEach((field) => {
      debugger;
      const control = this.contactForm.get(field);
      if (control?.touched || control?.dirty) {
        // Update specific field errors
        if (control?.hasError('required')) {
          errors[field] = `${field} is required.`;
        } else if (control?.hasError('email')) {
          errors[field] = `Invalid email address.`;
        }
      }
    });
    this.fieldErrors.set(errors); // Update the signal with the current errors
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendMessage(this.contactForm.value).subscribe({
        next: () => {
          this.contactForm.reset();
          this.errorMessage.set(''); // Clear general errors
          this.fieldErrors.set({}); // Clear field-specific errors
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.errorMessage.set('The requested resource was not found.');
          } else if (error.status === 400) {
            this.errorMessage.set('Bad request. Please check your inputs.');
          } else {
            this.errorMessage.set('An error occurred. Please try again later.');
          }
        },
      });
    } else {
      this.updateFieldErrors(); // Show errors on form submission if invalid
    }
  }
}
