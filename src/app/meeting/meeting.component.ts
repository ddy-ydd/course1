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
  meetingForm = this.formBuilder.group({
    topic: ['', Validators.required],
    num: ['', Validators.required],
    date: ['', Validators.required],
  });

  constructor(private formBuilder:FormBuilder){}

  onSubmit()
  {
    if (this.meetingForm.errors == null)
    {
      console.warn('Registered');
      this.meetingForm.reset()
    }
    else
    {
      console.warn('errors: ', this.meetingForm.errors)
    }
  }
}
