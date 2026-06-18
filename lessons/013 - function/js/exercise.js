// If we want a method to show us or do sth in the output, we must put a () in fornt of it
// alert;   <--- It doesn't work.
// alert(); <--- It does work. <--- This is a built-in method.

// method: It is the function that belongs to an object and is called through that object. --> windows.alert --> windows = object | alert = method
// function: It is a standalone function and can be called on its own.

// !NOTE: Now,how do we create our own function?
// To create a function, we use the (function) keyword.

function float(num){
    f = Math.floor(num);
    return f
}

alert(float(13.45444));
