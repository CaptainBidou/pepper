import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../class/question.class';
import { Answer } from '../class/answer.class';
import { AnswerService } from '../service/answer.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(public answerServ: AnswerService) { }

  question1!: Question;
  question2!: Question;
  question3!: Question;
  question4!: Question;

  questions: Question[] = [];
  ngOnInit(): void {
    this.question1 = new Question('C\'est quoi IG2I ?', 'text', new Answer('text', "qsdqsdqsdqsdqs dqsdqsdq sdqsdqs dqsdddddddddd dddd ddddddd dddddddddddd dddddddd dddddddd d dddddddddd dddddddddddddd dddddd dddddddd ddddddddd ddddddddddddd dddddddddd dddddddddd dddddddd dddddddddddddddd dddddddddd dddddddddddddddd dddddddd dddddd dddddddd dddd ddddddd d ddddddd ddddddd dddd dddddddddd ddddddddd ddddddddddddddd dddddddd dddddddddd   qsdqsdqsd qsd qsd qds qsd qsdq sdq sdq sdq sdq sdqdddddd ddddddddd ddddddd dddddd dddd dd", ''));
    this.question2 = new Question('Quel est le plan des JPO?', 'text', new Answer('number', '', ''));  
    this.questions.push(this.question1);
    this.questions.push(this.question2);
  }

}
