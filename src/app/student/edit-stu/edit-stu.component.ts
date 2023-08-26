import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Student } from 'src/app/Modal/Student';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-edit-stu',
  templateUrl: './edit-stu.component.html',
  styleUrls: ['./edit-stu.component.css']
})
export class EditStuComponent implements OnInit {

  updatestudent: any;
  

  constructor(private router: Router, private dataservice: ShareService) {
  }

  ngOnInit(): void {
    this.updatestudent = history.state;
    console.log(this.updatestudent.StudentId);

  }

  updateStudent(){
    let editedstudent = new Student({
      StudentId: this.updatestudent.StudentId,
      FullName: this.updatestudent.FullName,
      Mobile: this.updatestudent.Mobile 
    });
    console.log(editedstudent)
    this.dataservice.update(editedstudent);
  }

  closeClick(){
    this.router.navigate(['/student']);
  }

}
