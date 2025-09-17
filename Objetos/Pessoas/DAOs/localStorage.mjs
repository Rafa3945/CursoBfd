export const localStorage = {
  store: {},
  setItem(key, value){
    this.store[key] = value;
  },
  getItem(key){
    return this.store[key] || null;
  },
  removeItem(key){
    delete thi.store[key];
  },
  clear(){
    this.store = {};
  }
}