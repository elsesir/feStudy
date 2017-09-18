/**
 * Created by bigWhite on 17/9/18.
 */
/** 观察者模式又叫发布订阅者模式，定义了一种一对多的关系，多个观察者对象同时监听同一个主题，这个主题
 * 发生改变时就会通知所有观察者对象。
 * 由两类对象：主题和观察者；主题发布负责发布事件，同时观察者通过订阅这些事件来观察该主题，两者是完全
 * 解耦的。
 * node.js通过EventEmitter实现了对这一模式的原生支持。
 * 代码参考：http://blog.csdn.net/qiqingjin/article/details/51345542
 * **/
function Pubsub() {
    this.handlers = {};
}
Pubsub.prototype = {
    //订阅事件
    on: function (eventType, handler) {
        var self = this;
        if( !(eventType in self.handlers)) {
            self.handlers[eventType] = [];
        }
        self.handlers[eventType].push(handler);
        return this;
    },
    //触发事件（发布事件）
    emit: function(eventType) {
        var self = this;
        var handlerArgs = Array.prototype.slice.call(arguments,1);
        for (var i = 0; i < self.handlers[eventType].length; i++) {
            self.handlers[eventType][i].apply(self,handlerArgs);
        }
        return self;
    },
    //删除订阅事件
    off: function(eventType, handler) {
        var currentEvent = this.handlers[eventType];
        var len = 0;
        if(currentEvent) {
            len = currentEvent.length;
            // for(var i = len - 1; i >= 0; i--) {
            for(var i = 0; i < len; i++) {
                if(currentEvent[i] === handler) {
                    currentEvent.splice(i, 1);
                }
            }
        }
        return this;
    }
};
var pubsub = new Pubsub();
var callback = function(data) {
    console.log('callback' + data);
};
//订阅事件
pubsub.on('A', function(data) {
    console.log(1 + data);
});
pubsub.on('A', function(data) {
    console.log(2 + data);
});
pubsub.on('A', callback);

pubsub.on('B', callback);
//触发事件
pubsub.emit('A','我是第一次触发A的参数');
//删除订阅事件
pubsub.off('A', callback);

pubsub.emit('A','我是第二次触发事件时的参数');
//触发事件B
pubsub.emit('B',"我是B事件的参数");

/**定义一个可以被new的对象Person,包含一个方法walk;Child继承Person，并在Child中重写walk函数。
 * 对于js继承来说，一般属性值保存在自身，方法保存在prototype上。既可以满足方法的复用，又不会引起
 * 引用类型的属性值不正常的被修改。
 * */
function Person() {
    this.name = "a";
}
Person.prototype = function () {
    console.log("walk");
};
var Child = new Person;
Child.walk = function() {
    console.log("child walk");
};
Child.walk();
