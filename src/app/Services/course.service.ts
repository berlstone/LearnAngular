import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() { }

  getCoursesx() {
    return [];
  }

  getCourses() {
    return [
      {id: '1', CourseName: 'Zoology', Credit: 20, Coach: 'Ramalingam', Rating: 5},
      {id: 2, CourseName: 'Chemistry', Credit: 23, Coach: 'Anitha', Rating: 2},
      {id: 3, CourseName: 'Physics', Credit: 6, Coach: 'Jasmine', Rating: 4},
      {id: 4, CourseName: 'Biology', Credit: 60, Coach: 'Sodalai', Rating: 6},
      {id: 5, CourseName: 'Mathematics', Credit: 90, Coach: 'Karuppan', Rating: 9}
    ];
  }

}
