import { Component, ContentChild, OnInit } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { FormControl, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  clientForm: FormGroup;
  constructor(private formBuilder:FormBuilder){}

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      password: new FormControl(),
      repeat: new FormControl(),
    });   
  }

  onSubmit()
  {
    if (this.clientForm.errors == null)
    {
      console.warn('Registered');
      this.clientForm.reset();
    }
    else
    {
      console.log(this.clientForm.errors)
    }
  }

  compareValues(param1:any, param2:any): void
  {
    if (param1 != param2)
    {
      param2.setErrors('no match');
    }
    else
    {
      param2.setErrors(null);
    }
  }

}
