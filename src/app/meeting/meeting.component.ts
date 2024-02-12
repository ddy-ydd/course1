import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent {
  topic = new FormControl('')
  num = new FormControl('')
  date = new FormControl('')

  constructor(private formBuilder:FormBuilder){}

  onSubmit()
  {
    if (this.topic.errors == null && this.num.errors == null && this.date.errors == null)
    {
      console.warn('Registered');
      this.topic.reset();
      this.num.reset();
      this.date.reset();
    }
    else
    {
      console.warn('errors: topic - ', this.topic.errors, ', num - ', this.num.errors, ', date - ', this.date.errors)
    }
  }
}
