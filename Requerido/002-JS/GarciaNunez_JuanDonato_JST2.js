/*
Fragmento de código 1
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

----------------------------------------------------------
console.log 1               |           Hello
console.log 2               |           Dojo


#################################################################

Fragmento de código 2
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

----------------------------------------------------------
console.log 1               |           Hello
result                      |           15
console.log 2               |           result is 15


#################################################################

Fragmento de código 3
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

----------------------------------------------------------
console.log 1               |           num is 3
result                      |           18
console.log 2               |           result is 18


#################################################################

Fragmento de código 4
var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

----------------------------------------------------------
console.log 1               |           15
console.log 2               |           10
result                      |           10
console.log 3               |           10
console.log 4               |           15


#################################################################

Fragmento de código 5
var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

----------------------------------------------------------
console.log 1               |           15
console.log 2               |           10
result                      |           20
console.log 3               |           20
console.log 4               |           15


#################################################################

Fragmento de código 6
function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

----------------------------------------------------------
console.log 1               |           num is 3
y                           |           6
console.log 2               |           num is 5
y                           |           10
result                      |           16
console.log 3               |           result is 16


#################################################################

Fragmento de código 7
function sumNums(num1, num2) {  
   return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))

----------------------------------------------------------
console.log 1               |           5
console.log 2               |           8


#################################################################

Fragmento de código 8
function printSumNums(num1, num2) {
   console.log(num1);   
   return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))

----------------------------------------------------------
console.log 1               |           2
console.log 2               |           5
console.log 3               |           3
console.log 4               |           8


#################################################################

Fragmento de código 9
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

----------------------------------------------------------
console.log 1               |           sum is 5
console.log 2               |           sum is 8
console.log 3               |           result is 13


#################################################################

Fragmento de código 10
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);

----------------------------------------------------------
console.log 1               |           sum is 5 -
console.log 2               |           sum is 3
console.log 3               |           sum is 6 -
console.log 4               |           sum is 3
console.log 5               |           sum is 5
console.log 5               |           sum is 8 -
console.log 6               |           result is 19

*/
