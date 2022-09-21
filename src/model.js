class Model {
  constructor(state = []) {
    this.state = state;
  }
  getItem(id) {
    console.log(this.state);
    return this.state.find((item) => item.id == id);
  }
}
export default Model;
