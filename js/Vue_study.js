/**
 * Created by bigWhite on 17/7/8.
 */
window.onload=function() {
var app1 = new Vue ({
    el : '#app-1' ,
    data : {
        message: 'Hello Vue !' ,
        hasBorder: true
    }
});

    var app2 = new Vue ({
        el: '#app-2' ,
        data: {
            message : 'You loaded this page on' + new Date() ,
            styleObject  : {
                color: '#ffccff',
                fontSize: '10px',
                backgroundColor: '#beceeb',
                height: '30px'
            }
        }
    });

    var app3 = new Vue ({
        el: '#app-3' ,
        data: {
            seen : true
        }
    });

    var app4 = new Vue ({
        el: '#app-4' ,
        data: {
            todos: [
                { text: 'learn JavaScript' } ,
                { text: 'learn Vue'} ,
                { text: 'build some awesome'}
            ]
        }
    });

    var app42 = new Vue ({
        el: '#app-4-2',
        data: {
            parentMessage: 'Parent',
            items: [
                { message: 'Foo' },
                { message: 'Boo' }
            ]
        }
    });
    var app43 = new Vue ({
        el:'#app-4-3',
        data: {
            object: {
                firstName: 'foo',
                lastName: 'bar',
                age: '30'
            }
        }
    });

    var appN = new Vue({
        el: '#app-n'
    });
    var app44 = new Vue({
        el: '#app-4-4',
        data: {
            todos:[
                { message: '0'},
                { message: '2'},
                { message: '11'},
            ]
        }
    });

    var filterList = new Vue ({
        el: '#filter-list' ,
        data : {
            numbers : [ 1,2,3,4,5,6,7 ]
        },
        computed: {
            evenNumbers : function(){
                return this.numbers.filter( function(number) {
                    return number % 2 === 0
                })
            }
        }
    });
    var filterList2 = new Vue ({
        el: '#filter-list2',
        data: {
            numbers:[ 1,2,3,4,5 ]
        },
        methods: {
            even: function(numbers) {
                return numbers.filter( function(number) {
                    return number > 3
                })
            }
        }
    })
    var app5 = new Vue ({
        el: '#app-5',
        data: {
            message: 'hello Vue.js!'
        },
        methods: {
            reverseMessage: function () {
               this.message = this.message.split(" ").reverse().join(" +")
            }
        }
    });

    var app6 = new Vue ({
        el: '#app-6',
        data: {
            message: 'hello Vue.JS'
        }
    });

    // Define a new component called todo-item
    Vue.component('todo-item',{
        // The todo-item component now accepts a
        // "prop", which is like a custom attribute.
        // This prop is called todo.
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    });
    var app7 = new Vue ({
        el: '#app-7',
        data: {
            groceryList: [
                { text: 'Vegetables' },
                { text: 'cheese' },
                { text: 'Whatever else human are supposed to eat' }
            ]
        }

    });

    var vm = new Vue({
        el: '#example' ,
        data: {
            message: 'hello'
        },
        computed: {
            reversedMessage : function(){
                return this.message.split('').reverse().join('')
            }
        }
    });

    var vm2 = new Vue({
        el: '#demo' ,
        data: {
            firstName: 'Foo' ,
            lastName: 'Boo'
        },
        computed: {
            fullName: {
                get: function() {
                    return this.firstName + ' ' + this.lastName;
                },
                set: function( newValue) {
                    var names = newValue.split('');
                    this.firstName = names[0];
                    this.lastName = names[names.length-1]
                }
            }
        }
    });

    var watchExampleVm = new Vue ({
        el: '#watch-example' ,
        data: {
            question: '',
            answer: 'I cannot give you an answer until you ask a question:)'
        },
        watch: {
            //question发生改变，函数就会运行
            question: function( newQuestion) {
                this.answer = 'Waiting for you to stop typing...'
                this.getAnswer()
            }
        },
        method: {
            // _.debounce 是一个通过 lodash 限制操作频率的函数。
            // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
            // ajax请求直到用户输入完毕才会发出
            // 学习更多关于 _.debounce function (and its cousin
            // _.throttle), 参考: https://lodash.com/docs#debounce
            getAnswer: _.debounce(
                function () {
                    var vm = this
                    if (this.question.indexOf('?') === -1) {
                        vm.answer = 'Questions usually contain a question mark. ;-)'
                        return
                    }
                    vm.answer = 'Thinking...'
                    axios.get('https://yesno.wtf/api')
                        .then(function (response) {
                            vm.answer = _.capitalize(response.data.answer)
                        })
                        .catch(function (error) {
                            vm.answer = 'Error! Could not reach the API. ' + error
                        })
                },
                // 这是我们为用户停止输入等待的毫秒数
                500
            )
        }
    });
    Vue.component('todo-item', {
        template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
        props: ['title']
    });
    new Vue({
        el: '#todo-list-example',
        data: {
            newTodoText: '',
            todos: [
                'Do the dishes',
                'Take out the trash',
                'Mow the lawn'
            ]
        },
        methods: {
            addNewTodo: function () {
                this.todos.push(this.newTodoText)
                this.newTodoText = ''
            }
        }
    })


}
