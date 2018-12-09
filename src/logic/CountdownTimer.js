const interval = 33.33333;

class CountdownTimer {
  constructor() {
    this.time = 0.0;
    this.isActive = false;
  }

  begin(initialValue) {
    this.lastDate = (new Date()).getTime();
    this.time = initialValue;
    this.isActive = true;
    this.intervalHandler = setInterval(this.update.bind(this), interval);
  }

  update() {
    if (this.isActive)
    {
      if (this.time > 0.0) {
        let currentDate = (new Date()).getTime();
        this.time -= Math.max(currentDate - this.lastDate, 0.0);
        this.lastDate = currentDate;
        this.callback();
      } else {
        this.isActive = false;
        window.clearInterval(this.intervalHandler);
      }
    }
  }

  addTime(valueMs) {
    if (this.isActive) {
      this.time += valueMs;
    }
  }

  pause() {
    this.isActive = false;
  }

  resume() {
    if (this.time > 0.0) {
      this.isActive = true;
    }
  }

  setCallback(callback) {
    this.callback = callback;
  }
}

export default CountdownTimer;