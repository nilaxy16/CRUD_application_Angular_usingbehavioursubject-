import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
// import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './Modal/Student';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ShareService {

  defaultStudents: Student[] = [
    {
      StudentId: "2018/CSC/039",
      FullName: "Nilaxy Seelan",
      Mobile: "0778761771"      
    },
    {
      StudentId: "2017/PS/081",
      FullName: "Ajana Axseer",
      Mobile: "0761528628"
    }
  ]
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>(this.defaultStudents);
  updateStudent: Student[] | undefined;

  constructor(private router: Router) { }

  addNewStudent(student: Student) {
    this.defaultStudents.push(student);
    this.students$.next(this.defaultStudents);
  }

  update(student: Student) {
    let selectedStudentFromList = this.defaultStudents.find(data => data.StudentId == student.StudentId) || new Student(null);
    selectedStudentFromList.FullName = student.FullName;
    selectedStudentFromList.Mobile = student.Mobile;
    this.students$.next(this.defaultStudents);
    this.router.navigate(['/student'])
  }

  removeStudent(StudentId: string) {
    /* this.defaultStudents.forEach((t, i) => {
      if (t.StudentId === StudentId) {
        this.defaultStudents.splice(i, 1);
      }
      this.students$.next(this.defaultStudents);
    }); */

    this.defaultStudents = this.defaultStudents.filter(student => student.StudentId !== StudentId);
    this.students$.next(this.defaultStudents);
  }
}
