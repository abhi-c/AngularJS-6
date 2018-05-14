import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html', 
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of Courses";
  courses;
  isActive = false;
  email = "me@me.com";
  isFavourite = true;
  constructor(coursesServcie: CoursesService) {
    this.courses = coursesServcie.getCourses();
   }

   textBoxEvent() {
      console.log("Enter was pressed", this.email);
   }

   save($event, component) {
    console.log(component + " was clicked ", $event);
    if(component == "Div2")
    {
      $event.stopPropagation();
    }
   }

  ngOnInit() {
  }

}
