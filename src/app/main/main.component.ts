import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../class/question.class';
import { Answer } from '../class/answer.class';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  question1!: Question;
  question2!: Question;
  question3!: Question;
  question4!: Question;

  questions: Question[] = [];
  ngOnInit(): void {
    this.question1 = new Question('C\'est quoi IG2I ?', 'text', new Answer('text', '', ''));
    this.question2 = new Question('Quel est le plan des JPO?', 'text', new Answer('number', '', ''));
    this.questions.push(this.question1);
    this.questions.push(this.question2);
  }

}
