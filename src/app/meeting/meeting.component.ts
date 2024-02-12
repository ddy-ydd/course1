import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter } from '@angular/material/core'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { DatepickerModule } from 'ng-bootstrap';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent {
  topic = new FormControl('')
  num = new FormControl('')
  date = new FormControl('')

  constructor(){}

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
