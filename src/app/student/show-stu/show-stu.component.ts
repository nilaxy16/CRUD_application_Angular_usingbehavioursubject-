import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Modal/Student';
import { ShareService } from 'src/app/share.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-show-stu',
  templateUrl: './show-stu.component.html',
  styleUrls: ['./show-stu.component.css']
})
export class ShowStuComponent implements OnInit {

  activateAddEditStuCom:boolean = false;
  students: Student[] = [];
  student: any;

  constructor(private dataservice: ShareService, private router: Router) {
    //this.students = new student(null);
  }

  ngOnInit(): void {
    this.dataservice.students$.subscribe(data => {
      if(data) {
        this.students = data;
      }
    })
  }

  /* refreshStudentList() {
    this.sharedService.getStudentList().subscribe(data =>{
      this.studentList = data;
    });
  } */

  AddStudent(){

    this.activateAddEditStuCom = true;
  }

  EditStudent(student: any){
    
    // console.log(this.student);
    this.activateAddEditStuCom = true;

    //this.router.navigate(['/edit', student.StudentId], { queryParams: student } )
    this.router.navigate(['/edit', student.StudentId], { state:student } )
    
    // this.dataservice.removeStudent();
    //this.dataservice.editStudent(student.StudentId);
  }

  deleteClick(student: any){
    if(confirm('Are you sure??')){
      this.dataservice.removeStudent(student.StudentId);
    }
  }  

  closeClick(){
    this.activateAddEditStuCom=false;
  }

}
