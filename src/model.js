class Model {
  constructor(state = []) {
    this.state = state;
  }
  getItem(id) {
    return this.state.find((item) => item.id == id);
  }
}
export default Model;
