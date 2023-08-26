import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStuComponent } from './edit-stu.component';

describe('EditStuComponent', () => {
  let component: EditStuComponent;
  let fixture: ComponentFixture<EditStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
