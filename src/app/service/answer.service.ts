import { Injectable } from "@angular/core";
import { Answer } from "../class/answer.class";
import { Question } from "../class/question.class";

@Injectable({
    providedIn: 'root'
})

export class AnswerService {
    question!: Question;
    showAnswer: boolean = false;

    constructor() { }

    sendAnswer(question: Question): void {
        this.question = question;
        this.showAnswer = true;
        console.log(this.question);
    }
    closeAnswer(): void {
        this.showAnswer = false;
    }

}