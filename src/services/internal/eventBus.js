class EventBus {
  observers = {};

  on(eventName, func) {
    let ref = this.observers[eventName];
    if (!ref) {
      ref = [];
    }
    ref.push(func);
  }

  emit(eventName, data) {
    const functions = this.observers[eventName];
    if (functions) {
      functions.map(func => func(data));
    }
  }
}

export default new EventBus();
