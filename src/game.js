class Question {

    operations = ['+','-','/','*'];
    rnum = x => 1 + Math.floor(Math.random() * x);

    constructor(maxint) {
        this.operand1 = this.rnum(maxint);
        this.operand2 = this.rnum(maxint);
        this.operation = this.operations[Math.floor(Math.random() * this.operations.length)]
        this.correct = null;
        this.attempt = '';
    }

    answer() {
        switch (this.operation) {
            case '+': return this.operand1 + this.operand2;
            case '-': return this.operand1 - this.operand2;
            case '/': return Math.floor(this.operand1 / this.operand2);
            case '*': return this.operand1 * this.operand2;
            default: return null;
        }
    }

    
}
export default class GameLogic {
    constructor(numOfQ, maxint) {
        this.questionlist = [];
        for (let i = 0; i < numOfQ; i++)
            this.questionlist.push(new Question(maxint));
    }
    next() { return this.questionlist.pop(); }
}
