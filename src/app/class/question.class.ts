import { Answer } from "./answer.class";

export class Question {
    title: string;
    description: string;
    answer:Answer;
    constructor(title:string, description:string, answer:Answer){
        this.title=title;
        this.description=description;
        this.answer=answer;
    }
}