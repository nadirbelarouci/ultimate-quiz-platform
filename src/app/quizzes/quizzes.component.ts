import {Component, OnInit} from '@angular/core';
import {QUIZZES} from '../mock-quizzes';
import {Quiz} from '../quiz';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes = QUIZZES;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(quiz: Quiz) {

  }
}
