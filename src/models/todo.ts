/** @format */

class Todo {
  id: string;
  text: string;
  constructor(todoText: string) {
    //위의 text와id의 타입을 string으로 정해줌
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
export default Todo;
