import { Component , Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [[FormsModule]],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
Name = "";
Age = "";
@Output() studentAdded = new EventEmitter<{ Name: string, Age: string }>();

ADD() {
  if(+this.Age <= 40 && this.Name.length > 3){
  let newStudent = { Name: this.Name, Age: this.Age };
  this.studentAdded.emit(newStudent);
  this.Name = "";
  this.Age = "";
}
}
}