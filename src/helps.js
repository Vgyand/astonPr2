function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  Object.keys(props).forEach((key) => (element[key] = props[key]));

  children.forEach((child) => {
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }

    element.appendChild(child);
  });
  return element;
}

function saveAndInit(data) {
  const string = JSON.stringify(data);
  localStorage.setItem("items", string);
}

function load() {
  const string = localStorage.getItem("items");
  const data = JSON.parse(string);

  return data;
}

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, callback) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(callback);
  }

  emit(type, arg) {
    if (this.events[type]) {
      this.events[type].forEach((callback) => callback(arg));
    }
  }
}

export { saveAndInit, load, createElement, EventEmitter };
