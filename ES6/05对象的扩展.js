const name = '张三';
const age = 19;
const person = {
    name, //等同于name:name
    age,
    // 方法也可以简写
    sayName() {
        console.log(this.name);
    }
}
person.sayName();
//扩展运算符可以用于合并两个对象。
// let ab = { ...a, ...b };
// 等同于
let ab = Object.assign({}, a, b);
