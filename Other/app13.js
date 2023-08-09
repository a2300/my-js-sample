class CoffeMachine {
  _waterAmount = 0;

  constructor(power) {
    this._power = power;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  set waterAmount(value) {
    if(value < 0) throw new Error("Negative water amount");
    this._waterAmount = value;

  }
}

let coffeMachine = new CoffeMachine(10);
coffeMachine.waterAmount = -10;