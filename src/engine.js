
export class Engine {
  constructor(config) {
    this.config = config
  }

  start() {
    console.log('Engine running...', this.config.fixedUpdate)
  }
}