import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { EditStuComponent } from './student/edit-stu/edit-stu.component';

const routes: Routes = [
  {path:'student', component:StudentComponent,pathMatch:'full'},
  {path:'edit/:id', component:EditStuComponent}
  //{path:'edit/:id', component:EditStuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
