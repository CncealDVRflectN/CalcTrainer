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
      let currentDate = (new Date()).getTime();
      this.time -= Math.max(currentDate - this.lastDate, 0.0);
      this.lastDate = currentDate;
      if (this.time <= 0.0) {
        window.clearInterval(this.intervalHandler);
        this.isActive = false;
        this.time = 0.0;

        if (this.endCallback !== undefined) {
          this.endCallback();
        }
      }

      if (this.updateCallback !== undefined) {
        this.updateCallback();
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

  setUpdateCallback(callback) {
    this.updateCallback = callback;
  }

  setEndCallback(callback) {
    this.endCallback = callback;
  }

  getTimeString() {
    let sec = (this.time / 1000) % 60;
    let minutes = Math.floor(this.time / 60000);
    let result = '';

    if (minutes !== 0) {
      result += minutes + ':';
    } 
  
    result += sec.toFixed(3);

    return result;
  }
}

export default CountdownTimer;