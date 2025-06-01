import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-buggy-form',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './buggy-form.component.html',
  styleUrl: './buggy-form.component.css'
})
export class BuggyFormComponent {
 form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Add required validators
    // No code needed here, validators are added in the form group below
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submit() {
    // Check if the form is valid
    if (this.form.valid) {
      console.log(this.form.value)
      // Simulate a web API call with a Promise
  
    } else {
      console.log("Form Invalid")
    }
  }
}
