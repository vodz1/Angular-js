import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(20),
      Validators.max(40),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get nameValid() {
    return this.form.controls['name'].valid;
  }
  get ageValid() {
    return this.form.controls['age'].valid;
  }
  get emailValid() {
    return this.form.controls['email'].valid;
  }
}