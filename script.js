"use strict";

const page = document.getElementById('container');

class Question {
    constructor(ctx, answer, a, b, c="", d="") {
        this.ctx = ctx;
        this.q1 = a;
        this.q2 = b;
        if (c !== "") {
            this.q3 = c;
            if (d !== "") {
                this.q4 = d;
            }
        }
        if        (answer === 1) {
            this.answer = this.q1;
        } else if (answer === 2) {
            this.answer = this.q2;
        } else if (answer === 3) {
            this.answer = this.q3;
        } else if (answer === 4) {
            this.answer = this.q4;
        }
        return this;
    }
}

let questions = new Array();
questions.push(new Question("placeholder", 3, "false", "false", "true", "false"),
               new Question("placeholder", 1, "true", "false"))
console.log(questions)