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

/*SNIPPET 3:*/
function Customer () { // self contained customer object, isolated, clean.
    let _CustomerName= "";
    let _CustomerCode= "";
    _Validate = function() {
        _DbConnect();
        console.log('This is validate');
    }
    let _DbConnect = function(){

    }
    // Abstraction: Show only What is required
    return {
        CustomerName: _CustomerName,
        CustomerCode: _CustomerCode,
        Validate: _Validate
    }
} 
var cust = new Customer();
cust.Customer = "1000",
cust.Validate();