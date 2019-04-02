export default class Stack {
  constructor(dataArray = []) {
    // 要给一个栈定义哪些属性呢
    this.value = dataArray;
  }

  // 要给一个栈定义哪些方法呢
  // 向栈中添加元素
  push(data) {
    this.value.push(data);
  }

  // 删除并返回栈顶元素
  pop() {
    return this.value.pop();
  }
}