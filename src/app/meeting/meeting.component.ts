import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent {
  topic = new FormControl('');
  num = new FormControl('')
}
