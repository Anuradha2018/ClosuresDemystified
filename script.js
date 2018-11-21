/*SNIPPET1: This code below runs on a memory called stack, After the function execution is done, the memory gets disallocated */
function Counter () {
    let counter = 0;
    counter ++;
    console.log(counter);
}
Counter();// gives 1 as Output
Counter();// gives 1 as Output

/*SNIPPET 2: CLOSURES*/
function CounterOne () {
    let counter = 0;
    // this function enclosed inside other function.
    let Increment = function () {
        counter ++;
        console.log(counter);
    }
    return {
        Increment
    }
}
var x = CounterOne(); // First Instance
x.Increment();
x.Increment();
var x1 = CounterOne(); // Second Instance
x1.Increment();