import Model from "./model";
import View from "./view";
import Controller from "./constroller";
import { items } from "./items";
import { saveAndInit, load } from "./helps";

saveAndInit(items);
const state = load();

const model = new Model(state);

const view = new View();
const controller = new Controller(model, view);
console.log(view.drag());
