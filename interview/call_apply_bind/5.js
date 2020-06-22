// 摸骨
function supFather(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

supFather.prototype.sayName = function(age) {
    console.log(this.name, 'age');
}

function sub(name, age) {
    supFather.call(this, name); //call 继承
    this.age = age;
}

// 细节
function inheritPrototype(sonFn, fatherFn) {
    // 完成子类对父类的原型的继承
    // 如何实现
    sonFn.prototype = Object.create(fatherFn.prototype);
    // 通过object.create父类的原型对象交给子类的原型对象
    // 有问题嘛？ 做完了嘛？ 
    sonFn.prototype.constructor = sonFn;
}

inheritPrototype(sub, supFather);
sub.prototype.sayAge = function() {

}