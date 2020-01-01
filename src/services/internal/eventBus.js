class EventBus {
  observers = {};

  $on(eventName, func) {
    var ref = this.observers[eventName];
    if (!ref) {
      this.observers[eventName] = [];
    }
    this.observers[eventName].push(func);
  }

  $emit(eventName, data) {
    const functions = this.observers[eventName];
    if (functions) {
      functions.map(func => func(data));
    }
  }
}

export default new EventBus();
