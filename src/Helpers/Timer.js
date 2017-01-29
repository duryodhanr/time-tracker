
class Timer {
  constructor( tickCallback ) {
    this.tickCallback = tickCallback;
    this.elapsed = 0;
  }

  start() {
    this.interval = setInterval( () => this.tick(), 1000 );
  }

  stop() {
    clearInterval( this.interval );
  }

  tick() {
    this.elapsed++;
    this.tickCallback( this.elapsed );
  }

  reset() {
    this.elapsed = 0;
  }

  setElapsed( elapsed ) {
    this.elapsed = parseInt( elapsed, 10 );
  }

  getElapsed() {
    return this.elapsed;
  }
}

export default Timer;
