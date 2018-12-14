import isBinaryNumber from './isBinaryNumber';
import CountdownTimer from './CountdownTimer';

const initialTime = 10000;
const defaultTimeBonus = 30000;
const byteMask = 0xFF;

class BinaryGame {
  constructor() {
    this.timer = new CountdownTimer();
  }

  begin() {
    this.difficulty = 0;
    this.generateInitialQuiz();
    this.timer.begin(initialTime);
  }

  generateInitialQuiz() {
    this.currentResult = Math.round(Math.random() * byteMask);
    this.currentResultStr = '0b' + (this.currentResult >>> 0).toString(2);
    this.nextOperand = Math.round(Math.random() * byteMask);
    this.nextOperandStr = '0b' + (this.nextOperand >>> 0).toString(2);
    this.operator = '|';
  }

  generateNextQuiz() {
    let operatorId = Math.random() * 5;

    if (operatorId < 3.0) {
      let operandRepresentation = Math.random() * 3;
      this.nextOperand = Math.round(Math.random() * byteMask);

      if (operandRepresentation < 1.0) {
        this.nextOperandStr = this.nextOperand.toString();
      } else if (operandRepresentation < 2.0) {
        this.nextOperandStr = '0b' + (this.nextOperand >>> 0).toString(2);
      } else {
        this.nextOperandStr = '0x' + (this.nextOperand >>> 0).toString(16);
      }

      if (operatorId < 1.0) {
        this.operator = '&';
      } else if (operatorId < 2.0) {
        this.operator = '|'
      } else {
        this.operator = '^';
      }
    } else {
      this.nextOperand = Math.round(Math.random() * 8);
      this.nextOperandStr = this.nextOperand.toString();

      if (operatorId < 4.0) {
        this.operator = '<<';
      } else {
        this.operator = '>>';
      }
    }
  }

  checkAnswer(answer) {
    let answerNumber = parseInt(answer, 2);
    let result;
    switch(this.operator) {
      case '&':
        result = (this.currentResult & this.nextOperand) & byteMask;
        break;
      case '|':
        result = (this.currentResult | this.nextOperand) & byteMask;
        break;
      case '^':
        result = (this.currentResult ^ this.nextOperand) & byteMask;
        break;
      case '<<':
        result = (this.currentResult << this.nextOperand) & byteMask;
        break;
      default:
        result = (this.currentResult >>> this.nextOperand) & byteMask;
    }

    if (answerNumber === result) {
      this.currentResult = result;
      this.currentResultStr = '0b' + (result >>> 0).toString(2);
      this.generateNextQuiz();
      this.timer.addTime(defaultTimeBonus);

      return true;
    }

    if (this.gameOverCallback !== undefined) {
      this.gameOverCallback();
    }

    return false;
  }

  setGameOverCallback(callback) {
    this.gameOverCallback = callback;
    this.timer.setEndCallback(callback);
  }
}

export default BinaryGame;