import { Component, Input } from '@angular/core';
import { Answer } from '../class/answer.class';
import { AnswerService } from '../service/answer.service';
import { Question } from '../class/question.class';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})

export class AnswerComponent {
  @Input() question!: Question;

  constructor(public answerServ: AnswerService) { }
  close(): void {
    this.answerServ.closeAnswer();
  }
}
