import { Component, ContentChild, OnInit } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent{
  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    password: ['', Validators.required],
    repeat: ['', Validators.required]
  });

  constructor(private formBuilder:FormBuilder){}

  onSubmit()
  {
    if (this.registerForm.errors == null)
    {
      console.warn('Registered');
      this.registerForm.reset();
    }
    else
    {
      console.log(this.registerForm.errors)
    }
  }
}
