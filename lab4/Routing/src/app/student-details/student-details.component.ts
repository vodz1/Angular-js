import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styles: ``
})
export class StudentDetailsComponent {
  id = 0;
  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }
}
