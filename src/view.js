class View {
  constructor() {
    this.itemSlots = document.getElementById("itemsList");

    this.slot1 = document.getElementById("slot1");
    this.slot2 = document.getElementById("slot2");
    this.slot1.ondragover = this.allowDrop;
    this.slot2.ondragover = this.allowDrop;
    this.slot1.ondrop = this.drop;
    this.slot2.ondrop = this.drop;

    this.itemsArr = [...document.getElementsByClassName("item_wrapper")];
    console.log(this.itemsArr.forEach((item) => console.log("pasholnaxou")));
    // this.items.ondragover = this.allowDrop;
    // this.items.ondrop = this.drop;
    // this.items.ondragstart = this.drag;

    this.itemSlots.ondragover = this.allowDrop;
    this.itemSlots.ondrop = this.drop;

    this.stone = document.getElementById("stone");
    this.stone.ondragstart = this.drag;
    this.stone.ondrop = this.drop;
  }

  allowDrop(event) {
    event.preventDefault();
  }

  drag(event) {
    console.log(this.slot1, this.slot2);
    event.dataTransfer.setData("id", event.target.id);
  }

  drop(event) {
    let itemId = event.dataTransfer.getData("id");
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
  }
}

export default View;
