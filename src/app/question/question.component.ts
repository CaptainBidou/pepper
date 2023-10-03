import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../class/question.class'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})


export class QuestionComponent {

  @Input() question!: Question

  answer(): void {
    console.log(this.question.answer);
  }

  constructor() { }
}
