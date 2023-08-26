import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/Modal/Student';
import { ShareService } from 'src/app/share.service';
import { FormBuilder } from '@angular/forms';  

@Component({
  selector: 'app-add-edit-stu',
  templateUrl: './add-edit-stu.component.html',
  styleUrls: ['./add-edit-stu.component.css']
})
export class AddEditStuComponent implements OnInit {

  // student: Student = new Student();
  StudentId = " ";
  FullName = " ";
  Mobile = " ";
  students: Student[] = [];
  errors: any; 

  constructor(private dataservice: ShareService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.dataservice.students$.subscribe(data => {
      this.students = data;
    }) 
  }

  addStudent(StudentId: string, FullName: string, Mobile: string) {
    console.log(this.StudentId, this.FullName, this.Mobile);
    /* let newstudent = new Student({
      StudentId: this.student.StudentId,
      FullName: this.student.FullName,
      Mobile: this.student.Mobile 
    });
    console.log(newstudent); */
    // console.log(StudentId); 

    /* if(!this.students.find(data => data.StudentId == newstudent.StudentId)){
      this.dataservice.addNewStudent(newstudent);
    }else{
      this.errors = {
        StudentId: {
          isError: true,
          errorMessage: 'Dupilicate Student ID'
        }
      }
    } */
    
    
  } 

  /* updateStudent() {
    var val = {
      StudentId: this.StudentId,
      FullName: this.FullName,
      Mobile: this.Mobile
    };
    this.service.updateStudent(val).subscribe(res => {
      alert(res.toString());
    })
  } */
}
