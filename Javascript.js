var myObject = {};
myObject.value = 1;
console.debug(myObject);
myObject.double = function(){ //这个是函数的一个属性方法。
	var that = this; //当用方法调用的时候，this被绑定到了该对象。
	var helper = function(){
		that.value = that.value + 1;
		
	};
	helper();//函数调用 
	
}
myObject.double();
console.debug(myObject.value);

//--------------------------------

//Javascript 构造器函数的使用
var Quo = function (str){
	this.status = str;
}
console.debug(Quo);
Quo.prototype.get_status = function (){
	return this.status;
}
console.debug(Quo);
console.debug(Quo.prototype);//原型还是不太懂，第六章会有更多解释。

var myQuo = new Quo("confused");
var myQuo2 = Quo("no new");
console.debug(myQuo);
console.debug(myQuo2);//显示undefined
console.debug(myQuo.get_status());

//（2）一个简单的构造函数的创建，x，y属性和FunX，FunY方法。
function A(x,y) 
{ 
    this.x = x; //构造器函数的this指到新的对象
    this.y = y; 
    A.prototype.FunX = function(){alert(x)}; 
    A.prototype.FunY = function(){alert(y)}; 
	
} 
var obj = new A(5,10); //new这个关键字是关键。
var obj2 = A(6,11);

console.debug(obj);
console.debug(obj2);//undefined
	
//(3)函数方式调用时
var a = 1;
var b = 2;
var add = function(a,b){
	return this.a+this.b;
}
var sum = add(5,6);
console.debug(sum);//显示3 this指向了全局变量
console.debug(add);
console.debug(add.prototype);//显示object
	
//------------------------------------
Function.prototype.method = function (name , func){
	this.prototype[name] = func;
	return this;
}

Function.method('curry',function(){
	var args = arguments, that = this;
	console.debug(this);
});

var add = function(){
	var num = 1;
};

add.curry();

//---------------------------------------
//5.3原型，有用到这段代码
if (typeof Object.beget !=='function'){
	Object.beget = function (o){
		var F = function(){};
		F.prototype = o; //返回的是一个构造器函数，并且原型指向了o这个对象 
		return new F(); //返回了一个构造函数的实例
	
	}
}