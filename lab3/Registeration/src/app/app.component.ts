import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RegisterComponent , StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  studentsArr: { Name: string, Age: string }[] = [];

  onStudentAdded(newStudent: { Name: string, Age: string }) {
    this.studentsArr.push(newStudent);
  }
}