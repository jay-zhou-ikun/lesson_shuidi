function foo() {
    console.log(this.a);
}
let obj = {
    a:1,
    foo
}
// 1
foo();
// 2
obj.foo()
// 3
foo.call();
foo.apply();
foo.bind();

function Bar() {
    // this ????
    // this === bar
    // bar.a = 123;
    this.a = 123;
}
// new 的时候， this 指向 bar 
let obj1 = {}
// 1:bind
const Bar2 = Bar.bind(obj1);
// 2:new
const bar = new Bar2();
// Bar2 this 指向 obj1 ? bar
console.log(obj1, bar);
// {} Bar {a:123}