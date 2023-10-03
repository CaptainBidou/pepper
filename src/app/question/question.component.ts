import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../class/question.class'
import { AnswerService } from '../service/answer.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})


export class QuestionComponent {

  constructor(private answerService: AnswerService) { }

  @Input() question!: Question

  answer(): void {
    this.answerService.sendAnswer(this.question);
  }
}
