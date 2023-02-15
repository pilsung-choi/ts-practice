console.log(this);

function simpleFunc() {
    console.log(this);
}
window.simpleFunc();
console.cleare();

class Counter {
    count = 0;
    increase = () => {      // 에로우펑션을 쓰면 알아서 바인딩됨!!
        console.log(this);
    };
};
const counter = new Counter();
counter.increase();
const caller = counter.increase;
//const caller = counter.increase.bind(counter);
caller();

class Bob {

}
const bob = new Bob();
bob.run = counter.increase;
bob.run();