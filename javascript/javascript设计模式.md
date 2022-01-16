## 设计模式

### 面向对象和面向过程

面向对象注重于抽象事物，面向过程偏向于叙述事务
面向对象逻辑清晰有条理，面向过程过程比较片面
Javascript通过函数和原型，模拟了传统面向对象编程中类的概念实现了面向对象的编程模式
面向对象编程思想，主要 封装继承和多态。

举个简单的例子。描述一句话，小猫A吃了鱼和苹果，小猫B吃了面包，用面向对象和面向过程两个编程思想实现。

```javascript
//面向对象
function catAeatfish(){}
function catAeatapple(){}
function catBeatbread(){}

catAeatfish()
catAeatapple()
catBeatbread()

//面向过程
function Cat(name){
    this.name = name
}

Cat.pototype.eat = function(sonmething){}

var catA = new Cat("catA")
var catB = new Cat("catB")

catA.eat("fish")
catA.eat("apple")
catB.eat("bread")
```
#### 1.封装

封装方法有两个主是工厂模式和面向对象：

```javascript
普通方法
var catA = {
    name:'catA',
    eat:function(){
        console.log("catA eat something")
    }
}

var catB = {
    name:'catB',
    eat:function(){
        console.log("catB eat something")
    }
}

对冗余代码进行封装
1.工厂模式:
function creatCat(name){
    var obj = {}
    obj.name = name
    obj.eat = function(){
        console.log(name +"eat something")
    }
}

var catA = creatCat('catA')
var catB = creatCat('catB')

2.面向对象
function CreatCat(name){
    this.name = name
    this.eat =  function(){
        console.log(name +"eat something")
    }
}

var catA = new CreatCat('catA')
var catB = new CreatCat('catB')


```

