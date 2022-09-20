import Model from "./model";
import View from "./view";
import Controller from "./constroller";
import { items } from "./items";

const model = new Model();
const view = new View();
const controller = new Controller(model, view);
console.log(items);
