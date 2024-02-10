import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name = new FormControl('');
  email = new FormControl('');
  address = new FormControl('');
  password = new FormControl('');
  repeat = new FormControl('');
}
