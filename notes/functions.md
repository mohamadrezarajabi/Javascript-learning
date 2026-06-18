## defualt value:
* If a function has two parameters and we pass only one value to it when calling it, the second parameter will be undefined. To avoid this problem, we can set a default value for the parameters so that if no value is passed, the default value is used.

```
function sum(num1, num2 = 0) {
  return num1 + num2;
}
sum(5); // 5
```