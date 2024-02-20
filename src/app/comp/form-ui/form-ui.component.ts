import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-ui',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-ui.component.html',
  styleUrl: './form-ui.component.css'
})
export class FormUIComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, this.noWhitespaceValidator()]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]],
      select: ['', Validators.required],
      gender: ['', Validators.required],
      option1: [''],
      option2: [''],
      option3: [''],
      message: ['']
    });
  }

  noWhitespaceValidator() {
    return (control: { value: string }) => {
      const isValid = !(/^\s/.test(control.value) || /\s$/.test(control.value));
      return isValid ? null : { 'whitespace': true };
    };
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log("form submitted: ", this.myForm.value);
    }
  }
}