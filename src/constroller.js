class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    view.on("check", this.checkItems.bind(this));
  }

  checkItems(val) {
    console.log(val[0], val[1]);
    if (
      (val[0] == "stick" && val[1] == "coal") ||
      (val[0] == "coal" && val[1] == "stick")
    ) {
      this.view.craftetItem.innerHTML = `<img style="height:200px; width:200px;" src="./assets/torch.jpg"'}>`;
    }
    if (
      (val[0] == "stick" && val[1] == "stone") ||
      (val[0] == "stone" && val[1] == "stick")
    ) {
      this.view.craftetItem.innerHTML = `<img style="height:200px; width:200px;" src="./assets/stoneAxe.png"'}>`;
    }
  }
}

export default Controller;
