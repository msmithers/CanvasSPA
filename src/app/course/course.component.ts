import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCoursess();
  }

  getCoursess() {
    this.http.get('http://localhost:5000/api/course?access_token=9595~hpVWVTBD3bwHmWmwYFFPbO6AMngoLEoHsSx3DySHys4wedeciMKuARvd79YHWmUx')
      .subscribe(response => {
        // console.log(response);
        this.courses = response;
      }, error => {
        console.log(error);
      });
  }

}
