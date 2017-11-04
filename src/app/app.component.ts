import { Component ,OnInit} from '@angular/core';
import { studentService } from './student.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [studentService],
 
})
export class AppComponent implements OnInit {
  GetStudent = [];
  constructor(private studentservice:studentService){}
 
 ngOnInit(){
   this.studentservice.getStudent()
        .subscribe(studentDetails => this.GetStudent = studentDetails);
 }
 
}
