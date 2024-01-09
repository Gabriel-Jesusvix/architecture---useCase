class CounterModel {
  private count: number;

  constructor() {
    this.count = 0;
  }

  getCount(): number {
    return this.count;
  }

  setCount(count: number): void {
    this.count = count;
  }
}

export default CounterModel;
