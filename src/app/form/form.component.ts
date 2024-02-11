import { Component, ContentChild, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit{
  name = new FormControl('');
  email = new FormControl('');
  address = new FormControl('');
  password = new FormControl('');
  repeat = new FormControl('');

  onClick(name:any, email:any, address:any, password:any, repeat:any)
  {
    if (name == null) console.log("This field is required")
    else this.name=name
    if (email == null) console.log("This field is required")
    this.email=email
    this.address=address
    this.password=password
  }

  ngOnInit() {
  } 
}
