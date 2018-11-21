/*SNIPPET1: This code below runs on a memory called stack, After the function execution is done, the memory gets disallocated */
function Counter () {
    let counter = 0;
    counter ++;
    console.log(counter);
}
Counter();// gives 1 as Output
Counter();// gives 1 as Output