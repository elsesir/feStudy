window.onload=function(){new Vue({el:"#app-1",data:{message:"Hello Vue !",hasBorder:!0}}),new Vue({el:"#app-2",data:{message:"You loaded this page on"+new Date,styleObject:{color:"#ffccff",fontSize:"10px",backgroundColor:"#beceeb",height:"30px"}}}),new Vue({el:"#app-3",data:{seen:!0}}),new Vue({el:"#app-4",data:{todos:[{text:"learn JavaScript"},{text:"learn Vue"},{text:"build some awesome"}]}}),new Vue({el:"#app-4-2",data:{parentMessage:"Parent",items:[{message:"Foo"},{message:"Boo"}]}}),new Vue({el:"#app-4-3",data:{object:{firstName:"foo",lastName:"bar",age:"30"}}}),new Vue({el:"#app-n"}),new Vue({el:"#app-4-4",data:{todos:[{message:"0"},{message:"2"},{message:"11"}]}}),new Vue({el:"#filter-list",data:{numbers:[1,2,3,4,5,6,7]},computed:{evenNumbers:function(){return this.numbers.filter(function(e){return e%2==0})}}}),new Vue({el:"#filter-list2",data:{numbers:[1,2,3,4,5]},methods:{even:function(e){return e.filter(function(e){return 3<e})}}}),new Vue({el:"#click-counter",data:{counter:0}}),new Vue({el:"#say-hello",data:{name:"vue.js"},methods:{greet:function(e){alert("hello "+this.name+"!"),e&&alert(e.target.tagName)}}}),new Vue({el:"#talk",methods:{say:function(e){alert(e)}}}),new Vue({el:"#event-dom",methods:{warn:function(e,t){t&&t.preventDefault(),alert(e)}}}),new Vue({el:"#app-5",data:{message:"hello Vue.js!"},methods:{reverseMessage:function(){this.message=this.message.split(" ").reverse().join(" +")}}}),new Vue({el:"#app-6",data:{message:"hello Vue.JS"},methods:{submit:function(){alert("submit")}}}),new Vue({el:"#click-meta",methods:{doSomething:function(){alert("I do")}}}),new Vue({el:"#input-1",data:{message:""}}),new Vue({el:"#input-2",data:{message:""}}),new Vue({el:"#input-lasy",data:{msy:"disabled"}}),new Vue({el:"#check-box",data:{checked:!1}}),new Vue({el:"#check-boxes",data:{checkName:[]}}),new Vue({el:"#check-box3",data:{checked3:!1,isTrue:"T",isFalse:"F"}}),new Vue({el:"#radio-example",data:{picked:"which do you want to eat"}}),new Vue({el:"#radio-s",data:{a:"A",radioValue:"radioValue"}}),new Vue({el:"#select-list",data:{selected:""}}),new Vue({el:"#select-lists",data:{selectM:[]}}),new Vue({el:"#select-for",data:{selects:"",options:[{text:"one",value:"A"},{text:"two",value:"B"},{text:"three",value:"C"}]}}),new Vue({el:"#select-v",data:{selectv:[]}});Vue.component("my-component",{template:"<div>A custom component!</div>"});new Vue({el:"#component-exm"}),new Vue({el:"#component-exm2",components:{"component-child":{template:"<div>A</div>"}}});Vue.component("simple-counter",{template:'<button v-on:click="{ counter +=1}">{{ counter}}</button>',data:function(){return{counter:0}}});new Vue({el:"#component-exm3"});Vue.component("child",{template:"<p>{{ message }}</p>",props:["message"]});new Vue({el:"#component-child",data:{message:"i"}}),new Vue({el:"#component-child2",data:{parentMsg:"add words"}});Vue.component("todo-item",{props:["todo"],template:"<li>{{ todo.text }}</li>"});new Vue({el:"#app-7",data:{groceryList:[{text:"Vegetables"},{text:"cheese"},{text:"Whatever else human are supposed to eat"}]}});Vue.component("button-counter",{template:'<button v-on:click="increment">{{ counter }}</button>',data:function(){return{counter:0}},methods:{increment:function(){this.counter+=1,this.$emit("increment")}}});new Vue({el:"#button-counter-exm",data:{total:0},methods:{incrementTotal:function(){alert("按钮被按动"),this.total+=2}}}),new Vue({el:"#example",data:{message:"hello"},computed:{reversedMessage:function(){return this.message.split("").reverse().join("")}}}),new Vue({el:"#demo",data:{firstName:"Foo",lastName:"Boo"},computed:{fullName:{get:function(){return this.firstName+" "+this.lastName},set:function(e){var t=e.split("");this.firstName=t[0],this.lastName=t[t.length-1]}}}}),new Vue({el:"#watch-example",data:{question:"",answer:"I cannot give you an answer until you ask a question:)"},watch:{question:function(e){this.answer="Waiting for you to stop typing...",this.getAnswer()}},method:{getAnswer:_.debounce(function(){var t=this;-1!==this.question.indexOf("?")?(t.answer="Thinking...",axios.get("https://yesno.wtf/api").then(function(e){t.answer=_.capitalize(e.data.answer)}).catch(function(e){t.answer="Error! Could not reach the API. "+e})):t.answer="Questions usually contain a question mark. ;-)"},500)}});Vue.component("todo-item",{template:"    <li>      {{ title }}      <button v-on:click=\"$emit('remove')\">X</button>    </li>  ",props:["title"]}),new Vue({el:"#todo-list-example",data:{newTodoText:"",todos:["Do the dishes","Take out the trash","Mow the lawn"]},methods:{addNewTodo:function(){this.todos.push(this.newTodoText),this.newTodoText=""}}})};